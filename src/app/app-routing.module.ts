import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path:'list-task',
    component:TaskListComponent
    
  },
  {
    path:'list-user',
    component:UserListComponent

  },
  {
    path:'Addnewtask',
    component:CreateTaskComponent
  },
  {
    path: 'edit/:id', component: TaskEditComponent 
  },
  {
    path:'addnewuser',
    component:UserAddComponent
  },
  {
    path: 'edit-user/:id', component:UserAddComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
