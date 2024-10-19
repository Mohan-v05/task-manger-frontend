import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  title = 'FrontEnd';

  tasks:any[]=[]

  constructor(private serrvice:ServiceService){}  

  ngOnInit(): void {
    this.serrvice.getTaks().subscribe(data=>{
      this.tasks=data;
      console.log(this.tasks);
    })
  }
}
