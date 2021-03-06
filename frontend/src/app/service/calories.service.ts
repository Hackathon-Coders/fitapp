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
import { Calories } from '../model/calories';

const url_calories = 'http://localhost:8080/healthcheck/calories';

@Injectable({
  providedIn: 'root',
})
export class CaloriesService {
  url: string = '../../assets/calories.json';

  constructor(private http: HttpClient) {}

  saveCalories(calorie: Calories): Observable<Calories> {
    //return this.http.post<Calories>(this.url, calorie);
    return this.http.post<Calories>(url_calories, calorie);
  }
}
