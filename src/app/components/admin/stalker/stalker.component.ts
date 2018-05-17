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
    {value: '-1', viewValue: 'Tout'},
    {value: '0', viewValue: 'Communauté-0'},
    {value: '1', viewValue: 'Communauté-1'},
    {value: '2', viewValue: 'Communauté-2'},
    {value: '3', viewValue: 'Communauté-3'},
    {value: '4', viewValue: 'Communauté-4'},
    {value: '5', viewValue: 'Communauté-5'},
    {value: '6', viewValue: 'Communauté-6'},
    {value: '7', viewValue: 'Communauté-7'},
    {value: '8', viewValue: 'Communauté-8'},
    {value: '9', viewValue: 'Communauté-9'},
  ];
  gyms = [
    {value: '-1', viewValue: 'Tout'},
    {value: '0', viewValue: 'Salle-0'},
    {value: '1', viewValue: 'Salle-1'},
    {value: '2', viewValue: 'Salle-2'},
    {value: '3', viewValue: 'Salle-3'},
    {value: '4', viewValue: 'Salle-4'},
    {value: '5', viewValue: 'Salle-5'}
  ];
  plotlyUrls = {
    eigenVectorMap: 'https://plot.ly/~zhening/9.embed',
    closenessMap: 'https://plot.ly/~zhening/13.embed',
    betweennessMap: 'https://plot.ly/~zhening/17.embed',
    eigenVector3D: 'https://plot.ly/~zhening/11.embed',
    closeness3D: 'https://plot.ly/~zhening/15.embed',
    betweenness3D: 'https://plot.ly/~zhening/19.embed',
  };

  formModel: StalkerFormModel;
  onProcessing = false;
  plotlyToShow;
  plotSelected: string;

  constructor(private stalkerService: StalkerService) {
  }

  reloadIframe() {
    const target = <HTMLInputElement>document.getElementById('plotly-frame');
    target.src += '';
  }

  changePlotlySrc(id: string) {
    this.plotlyToShow = this.plotlyUrls[id];
    this.plotSelected = id;
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.formModel = new StalkerFormModel(null, 25, 69, null);
    this.plotlyToShow = 'https://plot.ly/~zhening/9.embed';
    this.plotSelected = 'eigenVectorMap';
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
