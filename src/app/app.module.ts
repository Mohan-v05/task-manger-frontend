import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';

import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SearchPipe } from './pipe/search.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    TaskEditComponent,
    SearchPipe
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
