import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string="http://localhost:51373/api/Login"
  constructor(private _client:HttpClient) { }
  public Login(email,pwd):Observable<any>
  {
    return this._client.get<any>(this.path+'/Validate/'+email+'/'+pwd);

  }
}
