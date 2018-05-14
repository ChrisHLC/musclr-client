import {Component, OnDestroy, OnInit} from '@angular/core';
import {Workout} from '../../../models/workout.model';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout-generator.component.html',
  styleUrls: ['./workout-generator.component.scss']
})
export class WorkoutGeneratorComponent implements OnInit, OnDestroy {

  workout: Workout;

  constructor(private router: Router, private userService: UserService) {
  }

  getGeneratedWorkout(data: any): void {
    this.workout = data;
  }

  sendWorkoutToPlanning(): void {
    if (this.workout !== null) {
      this.userService.addWorkoutToUser(this.workout).subscribe(data => {
          console.log(data);
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
      this.router.navigate(['scheduler']);
    }

  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}
