import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course_name;
  trainer_name;
  course_logo;
  course_description;
  message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }




  submit_form_data(){
    

    var body = "course_name=" + this.course_name 
        + "&trainer_name=" + this.trainer_name 
        + "&course_logo=" + this.course_logo
        + "&course_description=" + this.course_description;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/course/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Course Has Been Added !"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }




}