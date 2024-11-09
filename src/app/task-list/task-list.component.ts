import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServiceService, Task } from '../service.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {



  title = 'TASK LIST';
  searchTerm = '';
  tasks: Task[] = []

  constructor(private serrvice: ServiceService, private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Loadtask()

  }

  modelref?: BsModalRef
  TaskId: number = 0

  decline() {
    this.modelref?.hide();
  }

  confirm() {

    this.serrvice.Deletetask(this.TaskId).subscribe(data => {
      console.log(data)
      this.Loadtask();
    });
  }

  openModal(taskId: number, template: TemplateRef<any>) {
    this.modelref = this.modalService.show(template, { class: "modal-sm" })
    if (taskId) {
      this.TaskId = taskId
    }
    throw new Error('Method not implemented.');
  }


  Loadtask(): void {
    this.serrvice.getTasks().subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    })
  }


  GotoEditPage(id: number) {
    this.router.navigate(['edit/', id])
  }

}

