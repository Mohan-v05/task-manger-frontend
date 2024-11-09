import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  updateUser(user: any ,userid:number) {
    return this.http.put('http://localhost:5076/api/Users/'+ userid,user)
   }
 
 
   getUser(userId: number) {
    return this.http.get<User>('http://localhost:5076/api/Users/'+ userId);
   }
 
   getUsers(){ 
     return  this.http.get<User[]>('http://localhost:5076/api/Users')
   }
 
   AddUser(User:User){
     return this.http.post('http://localhost:5076/api/Users',User) 
   }
 
   Deleteuser(userId:number){
     return this.http.delete('http://localhost:5076/api/Users/'+userId)
   }

   Registeruser(UserRegister:UserRegister){
    return this.http.post<UserRegister>('http://localhost:5076/api/Auth/Register',UserRegister)
   }

   login(logininfo:Userlogin):Observable<any>{
    return this.http.post('http://localhost:5076/api/Auth/login',logininfo)
   }

   isLoggedIn():boolean{
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
    }

}

export interface User{
  id:number,
  name:string,
  email:string,
  phone:string,
  password: string,
  address?:Address
  taskItem?:Task[]
}

export interface Address{
    firstLine :string,
    secondLine:string,
    city:string,
} 

export class UserRegister
 {
    fullName? :string ;
    email : string = "";
    password :string= "";
    role:number=0;
  }

export interface Userlogin
{
  email : string ,
  password :string,
}
 