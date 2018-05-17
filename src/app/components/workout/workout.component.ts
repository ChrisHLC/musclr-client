import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkoutService} from './workout.service';
import { Workout } from '../../models/workout.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-seance',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {

  typeList =  [];
  typeSelected: string; 
  selectedTypeIndex: number;
  workoutList: Workout[];
  show = 6;
  buttonDisabled: boolean;

  constructor(private workoutService : WorkoutService) {
    this.buttonDisabled = false;
   }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.getTypeList();
    
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  getTypeList(): void {
    this.typeList[0] = "ALL";
    this.workoutService.getWorkoutTypeList()
      .subscribe(
        data => {
          this.typeList = this.typeList.concat(data);
          this.select(this.typeList[0], 0);
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  select(type: string, index: number): void {
    if(type == "ALL"){
      type = "all";
    }
    this.selectedTypeIndex = index;
    this.typeSelected = type;
    this.getWorkoutList(type);
    this.show = 6;
    this.buttonDisabled = false;
  }

  getWorkoutList(type: string): void {
    this.workoutService.getWorkoutListByType(type)
      .subscribe(
        data => {
          this.workoutList = data;
        },
        errorCode => console.log(errorCode),
        () => {
         
        }
      );
  }

  getWorkoutListByType(type: string){
    return this.workoutService.getWorkoutListByType(type);
  }

  showMore(): void {
    this.show += 6;
    if (this.show >= this.workoutList.length) {
      this.buttonDisabled = true;
    }
  }
}
