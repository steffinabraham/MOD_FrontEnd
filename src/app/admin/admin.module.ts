import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';



@NgModule({
  declarations: [AdmindashComponent, AdminloginComponent, AddcourseComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
