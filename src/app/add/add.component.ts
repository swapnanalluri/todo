import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'Todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  todo=[];

  constructor(private todoService:TodoService) {

  }


  handleFormData(formData){
    let todo:Todo = new Todo("nagsgdyudf","hgyuwdgqw");
    this.todoService.addTodo(todo);
  
  }

  
}
