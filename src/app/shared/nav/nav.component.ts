import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';





@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { [x: string]: any;
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
  setok(){
    var set='';
    set=localStorage.getItem('token');
    if(set==null)
    {
      return 0;
    }
    else{
      return 1;
    }
  }
    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
   
}
