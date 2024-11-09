import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserRegister, UserService } from '../service/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {
  RegisterForm: FormGroup;
  // role:string[]=["Admin","Editor","Viewer"]
  userRe:UserRegister;

 constructor(private Fb:FormBuilder,private toaster:ToastrService,private userservice:UserService){
  this.userRe = new UserRegister();
  this.RegisterForm=this.Fb.group({
    fullname:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.min(6)],
    confirmPass:['',Validators.min(6)],
    role:[,Validators.required]
  })
 }
 
 GetFormData(){
  console.log(this.RegisterForm.value);
  let Userregister=this.RegisterForm.value;

   if (Userregister.password==Userregister.confirmPass) {
     this.userRe.email=Userregister.email;
     this.userRe.fullName=Userregister.fullname; 
     this.userRe.password=Userregister.password;
     this.userRe.role= parseInt(Userregister.role);

      // console.log(this.userRe)
    this.userservice.Registeruser(this.userRe).subscribe(data =>{
      console.log(data)
      this.toaster.success(" Registration Successful")
    })

   
   }
  
 }  


}

