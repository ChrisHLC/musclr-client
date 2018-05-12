import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExerciseService} from '../../exercises/exercise.service';
import {WorkoutService} from '../workout.service';
import {WorkoutFormModel} from '../../../models/workout-form.model';
import {Workout} from '../../../models/workout.model';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {

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

  @Output() onFormSubmitted: EventEmitter<any> = new EventEmitter<any>();


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
    this.formModel = new WorkoutFormModel('', '', +'', '', null, '');
  }

  demo(): void {
    // tslint:disable-next-line:max-line-length
    this.formModel = new WorkoutFormModel('New Workout', this.exerciseLevelList[1], +this.workoutDurations[0].value, this.exerciseTypeList[3], true, this.workoutTypeList[1]);
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
        this.onFormSubmitted.emit(data);
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

}
