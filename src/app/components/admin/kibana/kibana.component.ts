import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-kibana',
  templateUrl: './kibana.component.html',
  styleUrls: ['./kibana.component.scss']
})
export class KibanaComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}
