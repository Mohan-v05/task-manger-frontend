import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService,User } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 
  title = 'USER LIST';
  searchTerm='';
  users:User[]=[]

  constructor(private serrvice:UserService , private router:Router){}  

  ngOnInit(): void {
    this.Loaduser()
   
  }

  Loaduser():void
  {
    this.serrvice.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
  })
 }

 Deleteuser(userId:number):void
 {
this.serrvice.Deleteuser(userId).subscribe(data=>{
  console.log(data)
  this.Loaduser();
})
 }
 GotoEditPage(id: number) {
  this.router.navigate(['edit/',id])
  }

}

