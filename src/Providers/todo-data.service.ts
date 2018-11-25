import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Todo } from '../app/todo';
import { Http, Headers, RequestOptions, Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
      export class TodoDataService {
        // private _url: string = 'http://twitteranalyticsservice.azurewebsites.net/Twitter/';
        private _url: string = 'https://front-end-test.azurewebsites.net/api/todo';
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
        return this._http.get(this._url)
      .map((res: Response) => res.json())
    }
   ///////
    addTodo(todo: Todo)  {
      return this._http.post(this._url , { name: todo.name})
      .map((res: Response) => res.json())
     }

    /////////   DELETE
    removeTodo(todo:Todo) {
       const deleteUrl = this._url + "/" +  todo.id
      // const deleteUrl = this._url + {todo:todo.id}
      return this._http.delete(deleteUrl)
     .map((response: Response) => response.json())
      }


      toggleTodoComplete(todo: Todo) {
        const updateTodoById = this._url + '/' + todo.id;
        return this._http.put(updateTodoById, {id: todo.id, name:todo.name , complete: todo.complete})
        .map((response: Response) => response.json())

      }


      //   put  yapma  postman
    //  https://front-end-test.azurewebsites.net/api/todo/5
    // {   "id": 5,
    // "name": "hakan5",
    // "isComplete": true
    // }     put yapar



    // toggleTodoComplete(todo: Todo) {
    //   const updateTodoById = this._url + '/' + todo.keyword;
    //   return this._http.put(updateTodoById,{id: todo.id, keyword:todo.keyword, complete: !todo.complete })
    //   .map((response: Response) => response.json())

    // }

   //  https://front-end-test.azurewebsites.net/api/todo/undefined   yapar



  //1 put olayı 1  toggleTodoComplete(todo: Todo) {
  //   const updateTodoById = this._url + '/' + todo.id;
  //   return this._http.put(updateTodoById,{id: todo.id, keyword:todo.name, complete: !todo.complete })
  //   .map((response: Response) => response.json())

  // }
  // "id": 5,
  // "name": null,
  // "isComplete": false     bunu verir  false true  verir  ama  name i  siler

  /// put olayı2
//   const updateTodoById = this._url + '/' + todo.id;
//   return this._http.put(updateTodoById, {id: todo.id, name:todo.name , complete: !todo.isComplete})

// <li *ngFor="let todo of todos" [class.completed]="todo.isComplete">
// <div class="view">
// <input style="outline:0;" class="toggle" type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.isComplete">
// <label> {{todo.name}}</label>
// <label> {{todo.isComplete}}</label>


// toggleTodoComplete(todo){
//   this.todoDataService.toggleTodoComplete(todo).subscribe();
//   // todo = new Todo();
//     }
// 1 kere  consola  false  yazanı tıklarsan  true  yapar  2.sinde  yapmaz  ve  service e  yazmaz
// complete: true
// id: 12
// name: "Item 3"
 /// put olayı2



//////1  hiç göndermez   200,201,204  yapar
   //   return this._http.delete(this._url, todo.id)
    //  https://front-end-test.azurewebsites.net/api/todo

 /////////////
////
    //2  return this._http.delete(this._url + {id:todo.id})
     //  https://front-end-test.azurewebsites.net/api/todo[object%20Object] yapar

//////

/////3

// const deleteUrl = this._url + { name: todo.keyword}
//  return this._http.delete(deleteUrl)
 //  https://front-end-test.azurewebsites.net/api/todo[object%20Object] yapar
////

/////4
// const deleteUrl = this._url + todo.id
// return this._http.delete(deleteUrl)
/// https://front-end-test.azurewebsites.net/api/todo3



         // Simulate PUT  ama  çalışmıyor  4
        //  toggleTodoComplete(todo: Todo) {
        //   const updateTodoById = this._url + 'Feed/' + todo.keyword;
        //   //return this.todos;
        //   return this._http.put(updateTodoById,{id: todo.id, keyword:todo.keyword, complete: !todo.complete })
        //   .map((response: Response) => response.json())

        //       }





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

