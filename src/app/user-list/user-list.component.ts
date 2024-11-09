import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService,User } from '../service/user.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  bsModalRef?: BsModalRef;
  title = 'USER LIST';
  searchTerm='';
  users:User[]=[]

  constructor(private serrvice:UserService , private router:Router,private modalService:BsModalService){}  

  ngOnInit(): void {
    this.Loaduser()
   
  }
  openModalWithComponent() {
    const initialState: ModalOptions = {
     
    };
    this.bsModalRef = this.modalService.show(UserAddComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
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

