import {Component, Input, OnInit} from '@angular/core';
import {Workout} from '../../../models/workout.model';

@Component({
  selector: 'app-workout-routine',
  templateUrl: './workout-routine.component.html',
  styleUrls: ['./workout-routine.component.scss']
})
export class WorkoutRoutineComponent implements OnInit {

  @Input() workout: Workout;

  constructor() {
  }

  ngOnInit() {
  }

}
