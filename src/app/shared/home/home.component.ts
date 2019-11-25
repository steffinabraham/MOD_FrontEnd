import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { Mentor } from 'src/app/models/mentor/mentor';
import { SearchService } from 'src/app/service/search/search.service';
import { MentorService } from 'src/app/service/mentor/mentor.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { TechnologyService } from 'src/app/service/technology/technology.service';
import { Technology } from 'src/app/models/technology/technology';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentoritem:Mentor;
  mentorlist:Mentor[];
  techitem:Technology;
  techlist:Technology[];
  useritem:User;
  userlist:User[];
  skill;
  mentormsg:string;
  usermsg:string;
  techmsg:string;

  constructor(private _service : SearchService, private _mentorservice : MentorService , private _userservice : UserService, private _techservice : TechnologyService , private http: HttpClient) {
    this.mentoritem=new Mentor();
    this._mentorservice.GetAll().subscribe(k=>this.mentorlist=k)

    this.useritem=new User();
    this._userservice.GetAll().subscribe(k=>this.userlist=k)

    this.techitem=new Technology();
    this._techservice.GetAll().subscribe(k=>this.techlist=k)
   }
 
  ngOnInit() {
  }
  public MentorAdd(){
    this._mentorservice.Add(this.mentoritem).subscribe(k=>this.mentormsg=k)
   
  }
  public UserAdd(){
  this._userservice.Add(this.useritem).subscribe(k=>this.usermsg=k)
  }

  public Search()
  {
    this._service.SearchMentor(this.skill).subscribe(k=>{this.mentorlist=k;
    console.log(k);
  }
  );

  

}
}
