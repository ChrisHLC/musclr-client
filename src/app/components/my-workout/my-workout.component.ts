import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.scss']
})
export class MyWorkoutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}
