import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component
({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})

export class UserAddComponent implements OnInit {
  Title='Create new user';
  createForm: FormGroup;
  isEdit=false;
  userId: number;
  button="ADD"

constructor(private service:UserService,private toastr: ToastrService, private router:Router,private fb:FormBuilder ,private route:ActivatedRoute )
{
  this.userId = Number(this.route.snapshot.paramMap.get("id"))
  if (this.userId) {
    this.isEdit=true;
    this.Title="Edit User";
    this.button="UPDATE"

  }
  ;
this.createForm=this.fb.group({
  name:['',Validators.required],
  email:[''],
  phone:[''],
  password:['',Validators.required],
  address: this.fb.group({
    firstLine :[''],
    secondLine:[''],
    city:[''],

  })
})

}


ngOnInit(): void {

  if (this.isEdit) {
    console.log(this.userId);

    const task =  this.service.getUser(this.userId).subscribe(data=>
      {
     
      this.createForm.patchValue(data)
   
    });
  }
 
}



GetFormdata()
{

   console.log( "Title"+this.createForm.controls['title'])
  console.log(this.createForm.value)
  let user=this.createForm.value;
  if (this.userId!==0) {
    user.id=this.userId;
    user.address.id=this.userId;
    console.log(user)
  this.service.updateUser(user,this.userId).subscribe(data=>{this.toastr.success("User updated succesfully")
  })}

  else{
this.service.AddUser(user).subscribe(data=>{
  this.toastr.success("userAdded")
})
  }
  //this.GotoHome()
  }
  


GotoHome():void
{
  this.router.navigate(['/list-task'])
}
  


}


