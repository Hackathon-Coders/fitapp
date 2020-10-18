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
import { Exercise } from '../model/exercise';

const url_exercise = 'http://localhost:8080/healthcheck/excercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  url: string = '../../assets/exercise.json';

  constructor(private http: HttpClient) {}

  saveExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(url_exercise, exercise);
    //return this.http.get<Exercise>(this.url);
  }
}
