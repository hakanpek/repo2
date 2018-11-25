import {Component, OnInit, Input} from '@angular/core';

import { TodoDataService } from '../Providers/todo-data.service';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit{
  newTodo: Todo = new Todo();
  todos: Todo[] = [];//fazla */

  constructor(private todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }

   addTodo() {  // 1
    this.todoDataService.addTodo(this.newTodo).subscribe();
    this.todos.push(this.newTodo);//eklendi*/
     return  this.newTodo = new Todo();


  }
   removeTodo(todo){ //2
    this.todoDataService.removeTodo(todo).subscribe();
       this.todos.splice(this.todos.indexOf(todo), 1);
      //  alert('silindi');
     }

     toggleTodoComplete(todo){
      this.todoDataService.toggleTodoComplete(todo).subscribe();

        }




     get TodoDataService() {
      return this.todoDataService.getAllTodos();
    }

      ngOnInit() {
      this.todoDataService.getAllTodos()
      .subscribe(resPostData => this.todos = resPostData);
       }

      }
