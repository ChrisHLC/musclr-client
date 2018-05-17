import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../../../models/workout.model';
import {UserService} from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-workout-div',
  templateUrl: './workout-div.component.html',
  styleUrls: ['./workout-div.component.scss']
})
export class WorkoutDivComponent implements OnInit{

  @Input()
  workout: Workout;

  ratingMoy: number;

  isDisabled = false;

  constructor(private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getAverageRating(this.workout); 
  }

  getAverageRating(workout: Workout): void {
    let ratingList = workout.ratings;
    if(Object.keys(ratingList).length != 0){
      this.ratingMoy = 0;
    }
    ratingList.forEach(rating =>{
        this.ratingMoy += rating.score;
    } );
    this.ratingMoy = this.ratingMoy/(Object.keys(ratingList).length);

    if(this.ratingMoy < 5){
      this.ratingMoy += 1;
    }

  }

  sendWorkoutToPlanning(workout: Workout): void {
    this.userService.addWorkoutToUser(workout).subscribe(data => {
        console.log(data);
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

  setStarStyle(number: number){
    let color = "#aaa";
    if(number <= this.ratingMoy){
      color = "orange";
    }
    return color;
  }

openSnackBar() {
  this.isDisabled = true;
  this.snackbar.open('Workout ajouté à vos workouts !', null, {
    duration: 1500
  });
}

}
