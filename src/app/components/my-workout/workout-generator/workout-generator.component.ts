import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../../exercises/exercise.service';
import {WorkoutService} from '../../workout/workout.service';
import {WorkoutFormModel} from '../../../models/workout-form.model';

@Component({
  selector: 'app-workout-generator',
  templateUrl: './workout-generator.component.html',
  styleUrls: ['./workout-generator.component.scss']
})
export class WorkoutGeneratorComponent implements OnInit {

  exerciseLevelList: string[];
  exerciseTypeList: string[];
  workoutTypeList: string[];
  workoutDurations = [
    {value: 10, viewValue: '10 mins'},
    {value: 20, viewValue: '20 mins'},
    {value: 30, viewValue: '30 mins'},
    {value: 40, viewValue: '40 mins'}
  ];


  formModel: WorkoutFormModel;

  constructor(private exerciseService: ExerciseService, private workoutService: WorkoutService) {
  }

  getExerciseLevels(): void {
    this.exerciseService.getExerciseLevelList()
      .subscribe(
        data => {
          this.exerciseLevelList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getExerciseTypes(): void {
    this.exerciseService.getExerciseTypeList()
      .subscribe(
        data => {
          this.exerciseTypeList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getWorkoutTypes(): void {
    this.workoutService.getWorkoutTypeList()
      .subscribe(
        data => {
          this.workoutTypeList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  resetForm(): void {
    console.log('reset');
  }

  demo(): void {
    // tslint:disable-next-line:max-line-length
    this.formModel = new WorkoutFormModel('New Workout', this.exerciseLevelList[0], +this.workoutDurations[0].value, this.exerciseTypeList[3], true, this.workoutTypeList[0]);
  }

  dataLoadOnStart(): void {
    this.getExerciseLevels();
    this.getExerciseTypes();
    this.getWorkoutTypes();
    this.formModel = new WorkoutFormModel('', '', +'', '', null, '');
  }

  ngOnInit() {
    this.dataLoadOnStart();
  }

  onSubmit() {
    this.workoutService.generateWorkout(this.formModel).subscribe(
      data => {
        console.log(data);
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

}
