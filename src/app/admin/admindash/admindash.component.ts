import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mentor } from 'src/app/models/mentor/mentor';
import { MentorService } from 'src/app/service/mentor/mentor.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { TechnologyService } from 'src/app/service/technology/technology.service';
import { Technology } from 'src/app/models/technology/technology';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  mentoritem: Mentor;
  mentorlist: Mentor[];
  useritem: User;
  techitem: Technology;
  techlist: Technology[];
  userlist: User[];
  mentormsg: string;
  usermsg: string;
  techmsg: string;


  constructor(private _mentorservice: MentorService, private _userservice: UserService, private _techservice: TechnologyService) {
    this.mentoritem = new Mentor();
    this._mentorservice.GetAll().subscribe(k => this.mentorlist = k);
    this.useritem = new User();
    this._userservice.GetAll().subscribe(k => this.userlist = k);
    this.techitem = new Technology();
    this._techservice.GetAll().subscribe(k => this.techlist = k);
  }

  ngOnInit() {
    // this.get_user_list();
    // this.get_mentor_list();
    // this.get_course_list();
    // this.get_message_list();
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
  }
 

  //------------------------------------------MENTOR

  public DeleteMentor(id:number) {
    this._mentorservice.Delete(id).subscribe(k => k = this.mentormsg);
  }
  public BlockMentor(id:number) {
    this._mentorservice.Block(id).subscribe(k => k = this.mentormsg);
    
  }
  public UnBlockMentor(id:number) {
    this._mentorservice.UnBlock(id).subscribe(k => k = this.mentormsg);
  }

  //------------------------------------------USER
  
  public DeleteUser(id:number) {
    this._userservice.Delete(id).subscribe(k => k = this.usermsg);
  }
  public BlockUser(id:number) {
    this._userservice.Block(id).subscribe(k => k = this.usermsg);
    
  }
  public UnBlockUser(id:number) {
    this._userservice.UnBlock(id).subscribe(k => k = this.usermsg);
  }

  //------------------------------------------TECHNOLOGY
  
  public Add() {
    this._techservice.Add(this.techitem).subscribe(k => this.techmsg = k);
  }
  
  public Update(id) {
    this._techservice.Update(id).subscribe(k => k = this.techmsg);
  }
  public DeleteTechnology(id:number) {
    this._techservice.Delete(id).subscribe(k => k = this.techmsg);
  }


  //-----------------------------------TJ SHOW FUNCTION

  usrFunction = function () {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "block";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "none";
  }
  mntrFunction = function () {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "block";
    c.style.display = "none";
    mes.style.display = "none";
  }
  crsFunction = function () {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "block";
    mes.style.display = "none";
  }
  msgFunction = function () {
    var u = document.getElementById("usr");
    var m = document.getElementById("mntr");
    var c = document.getElementById("crs");
    var mes = document.getElementById("msg");
    u.style.display = "none";
    m.style.display = "none";
    c.style.display = "none";
    mes.style.display = "block";
  }

}










