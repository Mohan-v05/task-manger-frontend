import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { UserRegister } from './service/user.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{
  path:'admin',
  component:AdminComponent,
  canActivate:[AuthGuard],
  children:[ {
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
  },
  {
    path:'' ,component:LoginComponentComponent
  }
 ]
},
{
  path:'',
  component:BlankComponent,
  children:[
    {
    path:'login',
    component:LoginComponentComponent
  },
  {
    path:'register',
    component:RegisterComponentComponent
  },
  {
    path:"**",
    component:LoginComponentComponent,
   
  }
]
}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
