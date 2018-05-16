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
    {value: '0', viewValue: 'Group-0'},
    {value: '1', viewValue: 'Group-1'},
    {value: '2', viewValue: 'Group-2'},
    {value: '3', viewValue: 'Group-3'},
    {value: '4', viewValue: 'Group-4'},
    {value: '99', viewValue: 'All'}
  ];

  formModel: StalkerFormModel;

  constructor(private stalkerService: StalkerService) {
  }

  reloadIframe() {
    const target = <HTMLInputElement>document.getElementById('plotly-frame');
    target.src += '';

  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.formModel = new StalkerFormModel(null);
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  onSubmit() {
    this.stalkerService.getNodesByGroup(this.formModel.group).subscribe(data => {

        console.log(data);
        this.stalkerService.updateStalkerMap(data).subscribe(result => {
          console.log(result);
          this.reloadIframe();
        });
      },
      errorCode => {
        console.log(errorCode);
      },
      () => {
      });
  }

}
