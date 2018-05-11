import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkoutService} from './workout.service';

@Component({
  selector: 'app-seance',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {

  mySeances = [];

  selectedIndex: number;

  select(index: number) {
    this.selectedIndex = index;
  }

  constructor(private workoutService : WorkoutService) { }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.getTypeList();
    this.selectedIndex = 0;
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  getTypeList(): void {
    this.mySeances[0] = "All";
    this.workoutService.getWorkoutTypeList()
      .subscribe(
        data => {
          this.mySeances = this.mySeances.concat(data);
        },
        errorCode => console.log(errorCode),
        () => {

        }
      );
  }

}
