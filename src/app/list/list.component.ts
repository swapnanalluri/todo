import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  private todos = [];

  constructor(private todoService:TodoService){

  }

  ngOnInit(){
    this.todos = this.todoService.listTodos();
  }

}
