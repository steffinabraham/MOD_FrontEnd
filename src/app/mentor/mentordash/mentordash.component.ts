import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor/mentor';

import { Technology } from 'src/app/models/technology/technology';
import { MentorService } from 'src/app/service/mentor/mentor.service';

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
  mentoritem:Mentor;
  mentorlist:Mentor[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;

  MentorName:number;
  MentorPeru: string;
  constructor(private router : Router,private _service:MentorService,private _trservice:TrainingService) {
    this.MentorName = +localStorage.getItem('token');
    this.mentoritem=new Mentor();
    this._service.GetAll().subscribe(k=>this.mentorlist=k);
    this.mentoritem.mentorId=this.MentorName;
  
    this.items=new Training();
   
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['login']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
 
  this._service.Update(this.mentoritem).subscribe(k=>k=this.msg)
}
public MentorCurTrainings(){
  this._trservice.GetTrainingByMentor(this.MentorName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}


  }

