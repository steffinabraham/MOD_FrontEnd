import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from 'src/app/models/mentor/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  path:string='http://localhost:50075/Mentor';
    constructor(private _client:HttpClient) { }
    public GetAll():Observable<Mentor[]>
    {
      return this._client.get<Mentor[]>(this.path+'/GetAll');
    }
    public Add(item:Mentor):Observable<string>
    {
      return this._client.post<string>(this.path+'/Add',item);
    }
    public Search(id:number):Observable<Mentor>{
      return this._client.get<Mentor>(this.path+'/GetById/'+id);
    }
   
    public Update(item:Mentor){
      return this._client.put(this.path+'/Update',item);
    }
    public Delete(id:number){
      return this._client.delete(this.path+'/Delete/'+id);
    }
    public Block(id:number){
      return this._client.put(this.path+'/BlockMentor/'+id,id);
    }
    public UnBlock(id:number){
      return this._client.put(this.path+'/UnBlockMentor/'+id,id);
    }
  }
  