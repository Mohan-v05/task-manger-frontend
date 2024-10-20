import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component
({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})

export class UserAddComponent {
  Title='Create new user';
  createForm: FormGroup;

constructor(private service:UserService,private toastr: ToastrService, private router:Router,private fb:FormBuilder )
{
this.createForm=this.fb.group({
  name:['',Validators.required],
  email:[''],
  phone:[],
  password:['',Validators.required]
})

}


GetFormdata(){
  console.log( "Title"+this.createForm.controls['title'])
  console.log(this.createForm.value)
  let user=this.createForm.value;
  this.service.AddUser(user).subscribe(data=>{
    this.toastr.success("User updated succesfully")
    this.GotoHome()
  })
}

GotoHome():void
{
  this.router.navigate([''])
}
  
}


