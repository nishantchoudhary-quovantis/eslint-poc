import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Task } from './task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public tasks?:Task[];

  public constructor(private _todoService:TodoService) { }

  public ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(){
    this._todoService.getTasks().subscribe(result => {
      console.log(result)
      this.tasks = result;
    })
  }

  public addTask(){
    this._todoService.addTask().subscribe(result =>{
      this.getTasks();
    });
  }
}
