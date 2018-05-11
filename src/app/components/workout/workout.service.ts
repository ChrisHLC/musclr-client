import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Workout } from "../../models/workout.model";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WorkoutService {
    private springBootServerUrl = environment.springBootServerUrl + 'workout/';

    constructor(private http: HttpClient){
    }

    getAll(): Observable <Workout[]>{
        return this.http.get<Workout[]>(this.springBootServerUrl + 'all');
    }

    getAllByType(type: String): Observable<Workout[]> {
        return this.http.get<Workout[]>(this.springBootServerUrl + 'types/' + type);
    }

    getWorkoutTypeList(): Observable <String[]>{
        return this.http.get<String[]>(this.springBootServerUrl + 'types');
    }
}
