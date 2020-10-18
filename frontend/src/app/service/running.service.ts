import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { UserResponse } from '../model/userResponse';
import { Observable } from 'rxjs';
import {  Running }from '../model/running';

@Injectable({
  providedIn: 'root'
})
export class RunningService {
  url: string = "../../assets/walking.json";

  constructor(private http:HttpClient) { }

  saveWalk(walk: Running):Observable<Running> {
    return this.http.post<Running>(this.url, walk);
    //    return this.http.get(this.url);
  }
  
}
