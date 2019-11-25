import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [HomeComponent, NavComponent, CourseComponent],
  imports: [
    CommonModule, BrowserModule, FormsModule, Ng2SearchPipeModule
  ]
})
export class SharedModule { }
