import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './service/user.service';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  updateTask(task: any ,taskid:number) {
   return this.http.put('http://localhost:5076/api/TaskItems/'+taskid,task)
  }


  getTask(taskId: number) {
   return this.http.get<Task>('http://localhost:5076/api/TaskItems/'+taskId);
  }


  getTasks(){
    return  this.http.get<Task[]>('http://localhost:5076/api/TaskItems')
  }

  AddTask(Task:Task){
    return this.http.post('http://localhost:5076/api/TaskItems',Task)
    
  }

  Deletetask(taskId:number){
    return this.http.delete('http://localhost:5076/api/TaskItems/'+taskId)
  }


}

export interface Task{
  id:number,
  title:string,
  description:string,
  dueDate:string,
  priority:string;
  user?:User;
  checklist?:checklist
}

export interface checklist{
  id:number,
  name: string,
  isDone: boolean,
  taskId: number,
  task?: Task
}


