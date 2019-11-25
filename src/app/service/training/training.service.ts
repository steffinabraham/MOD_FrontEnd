import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Training } from 'src/app/models/training/training';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  path:string='http://localhost:50075/Training';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Training[]>
  {
    return this._client.get<Training[]>(this.path+'/GetAllTraining');
  }
  public GetTrainingByUser(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByUser/'+id);
  }

  public GetTrainingByMentor(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByMentor/'+id);
  }
 
}

