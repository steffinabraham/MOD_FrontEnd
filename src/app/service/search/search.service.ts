import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mentor } from 'src/app/models/mentor/mentor';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  path: String = 'http://localhost:50075/User';
  constructor(private _client : HttpClient) { }
  public SearchMentor(skill): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetMentor/'+skill);
  }
}
