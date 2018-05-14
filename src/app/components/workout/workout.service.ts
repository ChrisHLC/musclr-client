import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Workout} from '../../models/workout.model';
import {WorkoutFormModel} from '../../models/workout-form.model';

@Injectable()
export class WorkoutService {
  private springBootServerUrl = environment.springBootServerUrl + 'workout/';

  constructor(private http: HttpClient) {
  }

  getWorkoutTypeList(): Observable<string[]> {
    return this.http.get<string[]>(this.springBootServerUrl + 'types');
  }

  generateWorkout(form: WorkoutFormModel): Observable<any> {

    return this.http.post(this.springBootServerUrl + 'generate', JSON.stringify(form), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getWorkoutListByType(type: String): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.springBootServerUrl + 'types/' + type);
  }

}
