import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User } from '../model/user';
import { Weight } from '../model/weight';
import { UserResponse } from '../model/userResponse';
import { Observable } from 'rxjs';

const url_weight = 'http://localhost:8080/healthcheck/weight';
@Injectable({
  providedIn: 'root',
})
export class WeightService {
  url: string = '../../assets/weight.json';

  constructor(private http: HttpClient) {}

  saveWeight(weight: Weight): Observable<Weight> {
    return this.http.post<Weight>(url_weight, weight);
    //return this.http.get<Weight>(this.url);
  }
}
