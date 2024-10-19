import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return  this.http.get<any[]>('http://localhost:5076/api/TaskItems')
  }

  AddTask(Task:any){
    return this.http.post<any[]>('http://localhost:5076/api/TaskItems',Task)
    
  }
}

