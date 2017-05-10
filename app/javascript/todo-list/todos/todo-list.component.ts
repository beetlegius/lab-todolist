import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
const TEMPLATE = require('./todo-list.component.html')

import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../reducers/todos/actions'

import { TodosService } from './todos.service'
import { Todo } from './todo'

@Component({
  selector: 'todo-list',
  template: TEMPLATE
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>
  public todoForm: FormGroup
  todo: Todo = new Todo()

  constructor(
    private service: TodosService,
    private store: Store<Todo[]>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.todos$ = this.service.todos

    this.todoForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  public add() : void {
    this.service.create(this.todo).subscribe(
      (todo) => {
        this.store.dispatch({ type: ADD_TODO, payload: [todo] })
        this.todoForm.reset()
      }
    )
  }

  public check(todo: Todo) : void {
    if (todo.checked)
      return
    todo.checked = true
    this.service.update(todo).subscribe( (todo) => this.store.dispatch({ type: UPDATE_TODO, payload: todo }) )
  }

  public destroy(todo: Todo) : void {
    if (confirm('¿Are you sure?'))
      this.service.destroy(todo).subscribe( (todo) => this.store.dispatch({ type: DELETE_TODO, payload: todo }) )
  }

}
