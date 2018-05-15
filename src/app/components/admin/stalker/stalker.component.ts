import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StalkerFormModel} from '../../../models/stalker-form.model';
import {StalkerService} from './stalker.service';

@Component({
  selector: 'app-stalker',
  templateUrl: './stalker.component.html',
  styleUrls: ['./stalker.component.scss']
})
export class StalkerComponent implements OnInit, OnDestroy {
  groups = [
    {value: '1', viewValue: 'Group-1'},
    {value: '2', viewValue: 'Group-2'},
    {value: '3', viewValue: 'Group-3'}
  ];

  formModel: StalkerFormModel;

  constructor(private stalkerService: StalkerService) {
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.formModel = new StalkerFormModel(null);
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  onSubmit() {
    this.stalkerService.getNodesByGroup(this.formModel.group).subscribe();
  }

}
