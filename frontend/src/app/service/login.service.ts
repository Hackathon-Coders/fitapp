import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "../../assets/data.json";

  userDetails: User;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.userDetails;
  }

  setUser(user: User) {
    this.userDetails = user;
  }

  login(user: User) {
    return this.http.post(this.url, user);
    //    return this.http.get(this.url);


  }
  userProfile(user: User) {

    return this.http.post(this.url, user);
  }
  updateuserProfile(user: User) {
    if (localStorage.getItem("token") != null) {
      return this.http.put(this.url, user);
    }
    else {
      return "401";
    }
  }
  checkUser() {
    if (localStorage.getItem("token") != null && this.getUser() != null) {
      return this.userDetails;
    }
    else {
      return "401";
    }
  }
  getUserDetails(id: String) {
    return this.http.get(this.url + id);
  }

}
