import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {
  email_id;
  pass_word;
  error_message = ""

  constructor(private http: HttpClient, private _router : Router) { }


  ngOnInit() {
  }
  submit_form_data(){
    console.log("email_id : " + this.email_id);
    console.log("pass_word : " + this.pass_word);

    var body = "email_id=" + this.email_id 
        + "&pass_word=" + this.pass_word;
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

this.http.post("http://localhost:3000/user/check", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        // localStorage.setItem('qualification', 'MCA');
        // localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
        if(result == 'Invalid User'){
          this.error_message = "Invalid User"
        } else if(result=='User Blocked'){
          alert("Account Blocked! Contact Admin");
        }
        
        
        else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
          localStorage.setItem('token', result);
          this._router.navigate(['userdash'])               

          //this.error_message = ""
          // this.error_message = result
        }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
}
