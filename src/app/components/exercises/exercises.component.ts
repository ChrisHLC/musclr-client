import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Exercise} from '../../models/exercise.model';
import {ExerciseService} from './exercise.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  @Input() exerciseList: Exercise[];
  @Output()
  onGroupSelected: EventEmitter<String> = new EventEmitter<any>();

  groupList: string[];
  groupSelected: string;
  selectedGroupIndex: number;
  show = 3;
  buttonDisabled: boolean;


  constructor(private exerciseService: ExerciseService, private sanitizer: DomSanitizer) {
    this.buttonDisabled = false;
  }

  showMore(): void {
    this.show += 3;
    if (this.show >= this.exerciseList.length) {
      this.buttonDisabled = true;
    }
  }

  clicked(group: string, index: number): void {
    this.groupSelected = group;
    this.onGroupSelected.emit(group);
    this.selectedGroupIndex = index;
    this.getExerciseList(group);

    this.show = 3;
    this.buttonDisabled = false;

  }

  getExerciseList(group: string): void {
    this.exerciseService.getExerciseListByGroup(group)
      .subscribe(
        data => {
          this.exerciseList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getGroupsList(): void {
    this.exerciseService.getExerciseGroupList()
      .subscribe(
        data => {
          this.groupList = data;
        },
        errorCode => console.log(errorCode),
        () => {
          this.clicked(this.groupList[0], 0);
        }
      );
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';

    this.getGroupsList();

  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  getExerciseListByGroup(group: string) {
    return this.exerciseService.getExerciseListByGroup(group);
  }

}
