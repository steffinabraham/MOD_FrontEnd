import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentordashComponent } from './mentordash/mentordash.component';



@NgModule({
  declarations: [MentorloginComponent, MentorsignupComponent, MentordashComponent],
  imports: [
    CommonModule
  ]
})
export class MentorModule { }
