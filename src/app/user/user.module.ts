import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserdashComponent } from './userdash/userdash.component';



@NgModule({
  declarations: [ UsersigninComponent, UsersignupComponent, UserdashComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
