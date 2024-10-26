import { Pipe, PipeTransform } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { Task } from '../service.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Task[], ...args:string[]): Task[] {
  
    const searchterm=args[0]
    return value.filter(a =>a.title.toLowerCase().includes(searchterm.toLowerCase())||a.description.toLowerCase().includes(searchterm.toLocaleLowerCase()));
  }
  
}
 