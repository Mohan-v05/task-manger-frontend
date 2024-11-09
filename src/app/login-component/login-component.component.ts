import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})


export class LoginComponentComponent {
LoginForm:FormGroup
   
  
constructor( private route : Router, private Fb:FormBuilder,private toaster:ToastrService,private userservice:UserService){
  this.LoginForm=this.Fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.min(6)],
   
  })
}

GetFormData(){
  let userLogin=this.LoginForm.value;
  this.onLogin(userLogin) 
 
 }  

onLogin(loginCredential:any){
  this.userservice.login(loginCredential).subscribe(data=>{
  console.log(data);
  this.toaster.success("Log in");
  localStorage.setItem('token',data.token);
  this.route.navigate(['admin/list-user'])
},(error=>{
 this.toaster.error(error.error)
}));


}


  GoToRegister(){
    this.route.navigate(['Register'])
  }
}


