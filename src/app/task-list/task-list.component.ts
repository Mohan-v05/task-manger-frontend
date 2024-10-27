import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServiceService, Task } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
decline() {
throw new Error('Method not implemented.');
}
confirm() {
throw new Error('Method not implemented.');
}
openModal(_t42: TemplateRef<any>) {
throw new Error('Method not implemented.');
}

  
  title = 'TASK LIST';
  searchTerm='';
  tasks:Task[]=[]

  constructor(private serrvice:ServiceService , private router:Router){}  

  ngOnInit(): void {
    this.Loadtask()
   
  }

  Loadtask():void
  {
    this.serrvice.getTasks().subscribe(data=>{
      this.tasks=data;
      console.log(this.tasks);
  })
 }

 Deletetask(taskId:number):void
 {
this.serrvice.Deletetask(taskId).subscribe(data=>{
  console.log(data)
  this.Loadtask();
})
 }
 GotoEditPage(id: number) {
  this.router.navigate(['edit/',id])
  }

}

