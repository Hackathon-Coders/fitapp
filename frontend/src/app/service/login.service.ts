import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { UserResponse } from '../model/userResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "../../assets/data.json";

  userDetails: UserResponse;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.userDetails;
  }

  setUser(user: UserResponse) {
    this.userDetails = user;
  }

  login(user: User):Observable<UserResponse> {
    return this.http.post<UserResponse>(this.url, user);
    //    return this.http.get(this.url);


  }
  userProfile(user: User):Observable<UserResponse> {

    return this.http.put<UserResponse>(this.url, user);
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
