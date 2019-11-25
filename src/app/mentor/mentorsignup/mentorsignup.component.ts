import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Mentor } from 'src/app/models/mentor/mentor';
import { MentorService } from 'src/app/service/mentor/mentor.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})


export class MentorsignupComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;

  constructor(private _service:MentorService) {
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k)
   }

  ngOnInit() {
  }
public Add(){
  this._service.Add(this.item).subscribe(k=>this.msg=k)
}
}
