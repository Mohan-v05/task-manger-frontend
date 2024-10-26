import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User, UserService } from '../service/user.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'

})
export class CreateTaskComponent implements OnInit {
Title='Create new task';
users:User[]=[];
  createForm: FormGroup;

constructor(private service:ServiceService ,private toastr: ToastrService, private router:Router,private fb:FormBuilder,private service2:UserService ){
this.createForm=this.fb.group({
  title:['',Validators.required],
  description:[''],
  dueDate:[],
  priority:['',Validators.required],
  userId:[]
})
}

ngOnInit(): void {
  this.service2.getUsers().subscribe(data=>{
    this.users=data;})
}


GetFormdata(){
  console.log( "Title"+this.createForm.controls['title'])
  console.log(this.createForm.value)
  let task=this.createForm.value;
  this.service.AddTask(task).subscribe(data=>{
    this.toastr.success("Task updated succesfully")
    this.GotoHome()
  })
}

GotoHome():void
{
  this.router.navigate([''])
}
  
}
