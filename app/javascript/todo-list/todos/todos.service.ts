import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Store } from '@ngrx/store'

import { Todo } from './todo'
import { ADD_TODO } from '../reducers/todos/actions'

@Injectable()
export class TodosService {

  public todos: Observable<Todo[]>
  private base_url: string = '/api/todos/'

  constructor(
    private http: Http,
    private store: Store<Todo[]>
  ) {
    this.todos = this.store.select('todos')
    this.load()
  }

  public load() {
    this.all().map( (payload) => ({ type: ADD_TODO, payload: payload }) ).subscribe( (action) => this.store.dispatch(action) )
  }

  public all() : Observable<Todo[]> {
    return this.http.get(this.base_url).map( (res: Response) => res.json() )
  }

  public find(id: number) : Observable<Todo> {
    return this.http.get(this.base_url + id).map( (res: Response) => res.json() )
  }

  public create(todo: Todo) : Observable<Todo> {
    return this.http.post(this.base_url, { todo: todo }).map( (res: Response) => res.json() )
  }

  public update(todo: Todo) : Observable<Todo> {
    return this.http.patch(this.base_url + todo.id, { todo: todo }).map( (res: Response) => res.json() )
  }

  public destroy(todo: Todo) : Observable<Todo> {
    return this.http.delete(this.base_url + todo.id).map( (res: Response) => res.json() )
  }

}
