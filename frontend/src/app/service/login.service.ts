import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import{User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 url:string="../../assets/data.json";
  constructor(private http:HttpClient) { }

  login(user:User){
return this.http.post(this.url,user);

  }
userProfile(user:User){

  return this.http.post(this.url,user);
}
getUserDetails(id:String){
  return this.http.get(this.url+id);
}

}
