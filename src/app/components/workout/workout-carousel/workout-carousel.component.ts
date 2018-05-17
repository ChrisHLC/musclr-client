import { Component, OnInit, Input} from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { Workout } from '../../../models/workout.model';
import {WorkoutService} from './../workout.service';

@Component({
  selector: 'app-seance-carousel',
  templateUrl: './workout-carousel.component.html',
  styleUrls: ['./workout-carousel.component.scss']
})
export class WorkoutCarouselComponent implements OnInit{

  public carouselOne: NguCarousel;

  WorkoutList = [];
  bestWorkoutList= [];
  firstPartWorkouts=[];
  secondPartWorkouts = [];
  thirdPartWorkouts = [];

  constructor(private workoutService : WorkoutService) {
   }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      //speed: 400,
      //interval: 4000,
      point: {
        visible: true
      },
      load: 3,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    this.getBestWorkoutList("all");
  }

  getBestWorkoutList(type: string): void {
    this.workoutService.getWorkoutListByType(type)
    .subscribe(
      data =>{
        this.WorkoutList = data;
        this.getFirstBestWorkoutList(9, this.WorkoutList, 5);
        this.parseWorkoutList();
      },
    errorCode => console.log(errorCode),
    () => { 
    }
    );
  }

  getFirstBestWorkoutList(listSize: number, workoutList: Workout[], starRate: number): void{
    if(workoutList.length >= listSize ){
      for(let i =0; i < workoutList.length; i++){
        if(workoutList[i].ratingMoy == starRate && this.bestWorkoutList.length <listSize){
          this.bestWorkoutList.push(workoutList[i]);
        }
      }
      if(Object.keys(this.bestWorkoutList).length < listSize){
        this.getFirstBestWorkoutList(listSize,workoutList, starRate -1);
      }
    }
    else{
      this.bestWorkoutList = workoutList; 
    }         
  }

  parseWorkoutList():void{
    let int = 0;
    this.bestWorkoutList.forEach(workout => {
      int +=1;
      if(int<=3){
        this.firstPartWorkouts.push(workout);
      } else if(int<=6){
        this.secondPartWorkouts.push(workout);
      } else{
        this.thirdPartWorkouts.push(workout);
      }
    });
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this function when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
}
