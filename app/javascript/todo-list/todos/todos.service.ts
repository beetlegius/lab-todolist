import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Todo } from './todo'

@Injectable()
export class TodosService {

  private base_url: string = '/api/todos/'

  constructor(
    private http: Http
  ) {}

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
