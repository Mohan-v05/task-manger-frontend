import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  updateTask(task: any ,taskid:number) {
   return this.http.put('http://localhost:5076/api/TaskItems/'+taskid,task)
  }


  getTask(taskId: number) {
   return this.http.get<Task>('http://localhost:5076/api/TaskItems/'+taskId);
  }

  constructor(private http:HttpClient) { }

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
}

