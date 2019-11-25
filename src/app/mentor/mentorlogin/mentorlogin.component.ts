import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { Mentor } from 'src/app/models/mentor/mentor';
import { User } from 'src/app/models/user/user';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit { [x: string]: any;
  email;
  pwd;
  
  
 userList:User[]=[];
  
  constructor(private http:HttpClient,private router:Router,private _service:LoginService) { }
  ngOnInit() {
  }
  public Login()
  {
    this._service.Login(this.email,this.pwd).subscribe(data=>{
      console.log(data)

      if(data.message=='User')
      {
        console.log("HAHAHAHHAHAHA");
        localStorage.setItem('token',data.token);
        this.router.navigate(['userdash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Mentor')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['mentordash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Admin')
      {
        localStorage.setItem('token',data.token);
        console.log("HAHAHAHHAHAHA");
        this.router.navigate(['admindash'],{relativeTo:this._activatedRoute});
      }
      else
      {
        console.log("Nothing found");
      }

    },
    err=>{
       console.log("subscribe err");
    });
  }
}
