import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
dataURL:string;
  constructor(private http: HttpClient) { 
    this.dataURL = "http://localhost:3000/tasks";
  }
  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.dataURL,task);
  }

  getAllTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.dataURL);
  }

  deleteTask(task : Task) : Observable<Task>{
    return this.http.delete<Task>(this.dataURL+"/"+task.id);
  }

  editTask(task : Task) : Observable<Task>{
    return this.http.put<Task>(this.dataURL+"/"+task.id,task);
  }

}
