import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StalkerFormModel} from '../../../models/stalker-form.model';
import {StalkerService} from './stalker.service';
import {WorkoutFormModel} from '../../../models/workout-form.model';

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

  gyms = [
    {value: '0', viewValue: 'Gym-0'},
    {value: '1', viewValue: 'Gym-1'},
    {value: '2', viewValue: 'Gymp-2'},
    {value: '3', viewValue: 'Gym-3'},
    {value: '4', viewValue: 'Gym-4'},
    {value: '5', viewValue: 'Gym-5'}
  ];

  plotlyUrls = {
    map1: 'https://plot.ly/~zhening/1.embed',
    map2: 'https://plot.ly/~zhening/2.embed',
    map3: 'https://plot.ly/~zhening/0.embed',
    threeD1: 'https://plot.ly/~zhening/0.embed',
    threeD2: 'https://plot.ly/~zhening/0.embed',
    threeD3: 'https://plot.ly/~zhening/0.embed',
  };

  formModel: StalkerFormModel;

  onProcessing = false;

  plotlyToShow;

  constructor(private stalkerService: StalkerService) {
  }

  reloadIframe() {
    const target = <HTMLInputElement>document.getElementById('plotly-frame');
    target.src += '';
  }

  changePlotlySrc(id: string) {
    this.plotlyToShow = this.plotlyUrls[id];
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.formModel = new StalkerFormModel(null, null, null, null);
    this.plotlyToShow = 'https://plot.ly/~zhening/1.embed';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  onSubmit() {
    this.onProcessing = true;
    this.stalkerService.filterNodes(this.formModel).subscribe((response: Response) => {
        console.log(response.body);
        this.stalkerService.updateStalkerMap(response.body).subscribe(data => {
          console.log(data);
          this.reloadIframe();
          this.onProcessing = false;
        });
      },
      errorCode => {
        console.log(errorCode);
      },
      () => {
      });
  }

}
