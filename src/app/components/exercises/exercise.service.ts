import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Exercise} from '../../models/exercise.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExerciseService {
  private springBootServerUrl = environment.springBootServerUrl + 'exercise/';

  private exercisesSelected: Exercise[];

  constructor(private http: HttpClient) {
  }

  getExerciseListByGroup(group: string): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.springBootServerUrl + 'groups/' + group);
  }

  getExerciseGroupList(): Observable<string[]> {
    return this.http.get<string[]>(this.springBootServerUrl + 'groups');
  }

  getExerciseLevelList(): Observable<string[]> {
    return this.http.get<string[]>(this.springBootServerUrl + 'levels');
  }

  getExerciseTypeList(): Observable<string[]> {
    return this.http.get<string[]>(this.springBootServerUrl + 'types');
  }
}
