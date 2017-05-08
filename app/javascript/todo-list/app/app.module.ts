import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { TodoListComponent } from '../todos/todo-list.component'

import { TodosService } from '../todos/todos.service'

import { StoreModule } from '@ngrx/store'
import { todosReducer } from '../reducers/todos/store'

const appRoutes : ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: TodoListComponent }
])

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutes,
    StoreModule.provideStore({todos: todosReducer})
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
