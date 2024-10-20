import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  updateUser(user: any ,userid:number) {
    return this.http.put('http://localhost:5076/api/Users/'+userid,user)
   }
 
 
   getUser(userId: number) {
    return this.http.get<User>('http://localhost:5076/api/Users/'+userId);
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

}

export interface User{
  id:number,
  name:string,
  email:string,
  phone:string,
  password: string
}