import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-legend',
  templateUrl: './graph-legend.component.html',
  styleUrls: ['./graph-legend.component.scss']
})
export class GraphLegendComponent implements OnInit {

  @Input()
  checkModel;
  
  constructor() { }

  ngOnInit() {
  }

}
