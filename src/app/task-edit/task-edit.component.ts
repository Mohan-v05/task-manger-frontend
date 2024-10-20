import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})

export class TaskEditComponent implements OnInit{
  Title='Edit task';
  createForm: FormGroup;
  taskId:number;

constructor(private service:ServiceService ,private toastr: ToastrService, private router:Router,private fb:FormBuilder,private route:ActivatedRoute )
{
  this.taskId = Number(this.route.snapshot.paramMap.get("id"));

this.createForm=this.fb.group({
  id:[''],
  title:['',Validators.required],
  description:[''],
  dueDate:[],
  priority:['',Validators.required]
})
}

ngOnInit(): void {
  console.log(this.taskId);

  const task =  this.service.getTask(this.taskId).subscribe(data=>
    {
    data.dueDate=new Date(data.dueDate).toISOString().slice(0,10);
    this.createForm.patchValue(data)
 
  });

  
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
  this.router.navigate([''])
}
  
}



