import { ActionReducer, Action } from '@ngrx/store'
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions'

import { Todo } from '../../todos/todo'


export const todosReducer : ActionReducer<Todo[]> = (state: Todo[] = [], action: Action) => {
  switch (action.type) {

    case ADD_TODO:
      return [...action.payload, ...state]

    case UPDATE_TODO:
      return state.map(todo =>
        action.payload.id === todo.id ? action.payload : todo
      )

    case DELETE_TODO:
      return state.filter(todo =>
        action.payload.id != todo.id
      )

    default:
      return state

  }
}
