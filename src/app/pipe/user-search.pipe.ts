import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../service/user.service';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: User[], ...args:string[]): User[] {
  
    const searchterm=args[0]
    return value.filter(a =>a.name.toLowerCase().includes(searchterm.toLowerCase())||a.email.toLowerCase().includes(searchterm.toLowerCase()));
  }
  }


