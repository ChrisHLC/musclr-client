import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RequestOptions} from '../components/auth/request-options.interface';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Workout} from '../models/workout.model';
import {Observable} from 'rxjs/Observable';
import {FriendRequest} from '../models/friend-request.model';

@Injectable()
export class UserService {

  private usersUrl = environment.serverUrl + 'users/';

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  private httpOptions: RequestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response'
  };

  addWorkoutToUser(workout: Workout) {
    return this.httpClient.patch(this.usersUrl + 'workouts/add', workout, this.httpOptions)
      .map((httpResponse: HttpResponse<any>) => {
        return httpResponse.body;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));

  }
}
