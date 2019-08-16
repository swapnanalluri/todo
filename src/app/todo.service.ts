import { Injectable } from '@angular/core';

import { Todo } from 'Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[];
  constructor() { }

  addTodo(todo:Todo):void{
    this.todos.push(todo);
  }

  listTodos():Todo[]{
    return this.todos;
  }

  findByTodoTask(task:string):Todo{
    return this.todos.filter(todo => todo.task === task)[0];
  }

/*  deleteTodo(id:number):void{
    this.users = this.users.filter(user => user.id !== id);
  }*/
}
