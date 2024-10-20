import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  {
    path:'',
    component:TaskListComponent
    
  },
  {
    path:'Addnewtask',
    component:CreateTaskComponent
  },
  {
    path: 'edit/:id', component: TaskEditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
