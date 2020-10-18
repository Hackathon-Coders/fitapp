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
import { Running } from '../model/running';

const url_running = 'http://localhost:8080/healthcheck/running';

@Injectable({
  providedIn: 'root',
})
export class RunningService {
  url: string = '../../assets/walking.json';

  constructor(private http: HttpClient) {}

  saveWalk(walk: Running): Observable<Running> {
    return this.http.post<Running>(url_running, walk);
    //return this.http.get<Running>(this.url);
  }
}
