import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
title='Create new task'
constructor(private service:ServiceService){

}
createForm=new FormGroup({
  title:new FormControl(),
  description:new FormControl(),
  dueDate:new FormControl(),
  priority:new FormControl()

})
GetFormdata(){
  console.log(this.createForm.value)
  this.service.AddTask(this.createForm.value).subscribe(data=>{
    alert("task added")
  })
}


}
