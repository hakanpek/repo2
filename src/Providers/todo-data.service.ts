import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Todo } from '../app/todo';
import { Http, Headers, RequestOptions, Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
      export class TodoDataService {
        private _url: string = 'http://twitteranalyticsservice.azurewebsites.net/Twitter/';
        lastId: number = 0;
        todos: Todo[] = [];

        headers = new Headers({ 'Content-Type': 'application/json' });
        options = new RequestOptions({ headers: this.headers });
        private extractData(res: Response) {
          let body = res.json();
          return body || {};
      }

      private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        //let errMsg: string;
        //if (error instanceof Response) {
        //    const body = error.json() || '';
        //    const err = body.error || JSON.stringify(body);
        //    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        //} else {
        //    errMsg = error.message ? error.message : error.toString();
        //}
        return Observable.throw(error.json() || 'Error');

    }

        constructor(private _http: Http) {  }

  //////// GET
      getAllTodos() {
        return this._http.get(this._url + 'GetAllFeed')
      .map((res: Response) => res.json())
    }
   ///////
    addTodo(todo: Todo)  {
      return this._http.post(this._url + 'Feed', { keyword: todo.keyword})
      .map((res: Response) => res.json())
     }

    /////////   DELETE
    removeTodo(todo: Todo) {
    const deleteUrl = this._url + 'Feed' + todo.keyword;
     return this._http.delete(deleteUrl)
     .map((response: Response) => response.json())
      }

         // Simulate PUT  ama  çalışmıyor  4
        //  toggleTodoComplete(todo: Todo) {
        //   const updateTodoById = this._url + 'Feed/' + todo.keyword;
        //   //return this.todos;
        //   return this._http.put(updateTodoById,{id: todo.id, keyword:todo.keyword, complete: !todo.complete })
        //   .map((response: Response) => response.json())

        //       }



    toggleTodoComplete(todo: Todo) {
      const updateTodoById = this._url + 'Feed/' + todo.keyword;
      return this._http.put(updateTodoById,{id: todo.id, keyword:todo.keyword, complete: !todo.complete })
      .map((response: Response) => response.json())

          }

      // deleteTodoById(id: number): TodoDataService {
      //   this.todos = this.todos
      //     .filter(todo => todo.id !== id);
      //   return this;
      // }

      // getTodoById(id: number): Todo {
      //   return this.todos
      //     .filter(todo => todo.id === id)
      //     .pop();
      // }


}

