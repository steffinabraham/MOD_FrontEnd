import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor/mentor';
import { User } from 'src/app/models/user/user';
import { Technology } from 'src/app/models/technology/technology';
import { MentorService } from 'src/app/service/mentor/mentor.service';
import { UserService } from 'src/app/service/user/user.service';
import { TechnologyService } from 'src/app/service/technology/technology.service';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/service/training/training.service';
import { Training } from 'src/app/models/training/training';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.css']

})
export class MentordashComponent implements OnInit {
  mentoritem: Mentor;
  mentorlist: Mentor[];
  useritem: User;
  techitem: Technology;
  techlist: Technology[];
  userlist: User[];
  trainingitem: Training;
  traininglist: Training[];
  trainingmsg: string;
  mentormsg: string;
  usermsg: string;
  techmsg: string;
  addclick;
  UserName: number;
  MentorName: number;

  constructor(private router: Router, private _mentorservice: MentorService, private _userservice: UserService, private _techservice: TechnologyService, private _trainingservice:TrainingService) {
    this.mentoritem = new Mentor();
    this._mentorservice.GetAll().subscribe(k => this.mentorlist = k);
    this.useritem = new User();
    this._userservice.GetAll().subscribe(k => this.userlist = k);
    this.techitem = new Technology();
    this._techservice.GetAll().subscribe(k => this.techlist = k);
  }

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
      this.MentorName = +localStorage.getItem('token');
      this.mentoritem=new Mentor();
      this._mentorservice.GetAll().subscribe(k=>this.mentorlist=k);
      this.useritem.userId=this.UserName;
      this.trainingitem=new Training();
     
    }


  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);

  }
  public add() {
    this.addclick = 1;
  }
  public Update() {

    this._mentorservice.Update(this.mentoritem).subscribe(k => k = this.mentormsg)
  }
  public UserCurTrainings(){
    this._trainingservice.GetTrainingByUser(this.MentorName).subscribe(k=>this.traininglist=k);
    // this.curtrainingclick=1;
    // this.updatepassclick=0;
  }
}
