import {Component, OnDestroy, OnInit} from '@angular/core';
import {Workout} from '../../../models/workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout-generator.component.html',
  styleUrls: ['./workout-generator.component.scss']
})
export class WorkoutGeneratorComponent implements OnInit, OnDestroy {

  workout: Workout;

  constructor() {
  }

  getGeneratedWorkout(data: any): void {
    console.log(data);
    this.workout = data;
  }


  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}
