import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from 'src/app/models/technology/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path:string='http://localhost:50075/Technology';

  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Technology[]>
  {
    return this._client.get<Technology[]>(this.path+'/GetAll');
  }
  public Add(item:Technology):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  public Search(id:number):Observable<Technology>{
    return this._client.get<Technology>(this.path+'/GetById/'+id);
  }
 
  public Update(item:Technology){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:number){
    return this._client.delete(this.path+'/Delete/'+id );
  }
}