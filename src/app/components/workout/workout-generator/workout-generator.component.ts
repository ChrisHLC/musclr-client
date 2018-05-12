import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout-generator.component.html',
  styleUrls: ['./workout-generator.component.scss']
})
export class WorkoutGeneratorComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}
