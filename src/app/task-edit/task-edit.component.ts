import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../service/user.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})

export class TaskEditComponent implements OnInit{
  Title='Edit task';
  createForm: FormGroup;
  taskId:number;
  users:User[]=[];

constructor(private service:ServiceService ,private toastr: ToastrService, private router:Router,private fb:FormBuilder,private route:ActivatedRoute,private Serrvice2:UserService)
{
  this.taskId = Number(this.route.snapshot.paramMap.get("id"));

this.createForm=this.fb.group({
  id:[''],
  title:['',Validators.required],
  description:[''],
  dueDate:[],
  priority:['',Validators.required],
  userId:['']
})
}

ngOnInit(): void {
  console.log(this.taskId);

  const task =  this.service.getTask(this.taskId).subscribe(data=>
    {
    data.dueDate=new Date(data.dueDate).toISOString().slice(0,10);
    this.createForm.patchValue(data)
  });
  this.Serrvice2.getUsers().subscribe(data=>{
    this.users=data
  })
  
}


GetFormdata(){
  console.log( "Title"+this.createForm.controls['title'])
  console.log(this.createForm.value);

  let task=this.createForm.value;
  task.id=this.taskId;
  this.service.updateTask(task,this.taskId).subscribe(data=>{
    this.toastr.success("Task Updated succesfully")
    this.GotoHome()
  })
}

GotoHome():void
{
  this.router.navigate(['list-task'])
}
  
}

export class DemoDatepickerBasicComponent {}

