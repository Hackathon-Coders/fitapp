import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User } from '../model/user';
import { UserResponse } from '../model/userResponse';
import { Observable } from 'rxjs';

const url_login = 'http://localhost:8080/healthcheck/login';
const url_register = 'http://localhost:8080/healthcheck/register';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url: string = '../../assets/data.json';

  /* USER DETAILS */
  userDetails: UserResponse = new UserResponse();

  getUser() {
    return this.userDetails;
  }

  setUser(user: UserResponse) {
    this.userDetails = user;
  }

  /* API CALLS */
  login(user: User): Observable<UserResponse> {
    //return this.http.post<UserResponse>(this.url, user);
    return this.http.post<UserResponse>(url_login, user);
  }

  registerUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(url_register, user);
  }

  /* updateuserProfile(user: User) {
    if (localStorage.getItem('token') != null) {
      return this.http.put(this.url, user);
    } else {
      return '401';
    }
  } */

  checkUser() {
    console.log(this.getUser(), 'this.getUser()');
    if (localStorage.getItem('token') != null && this.getUser().user != null) {
      return this.getUser();
    } else {
      return '401';
    }
  }

  /* getUserDetails(id: String) {
    return this.http.get(this.url + id);
  } */
}
