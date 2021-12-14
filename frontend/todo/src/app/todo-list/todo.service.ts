import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:5000';
  public constructor(private _http: HttpClient) { }

  public getTasks() {
    const url = `${this.baseUrl}/tasks`;
    return this._http.get<Task[]>(url);
  }

  public addTask() {
    const url = `${this.baseUrl}/task`;
    let current_task = 1
    const data = {
      "title": `this is my task ${current_task}`,
      "description": `this is my task ${current_task} description`
    }
    return this._http.post(url,data).pipe(
      tap(result=>{current_task+=1})
    )
  }

}
