import { Component, OnInit, Input } from '@angular/core';
import { GraphLegendService } from './graph-legend.service';

@Component({
  selector: 'app-graph-legend',
  templateUrl: './graph-legend.component.html',
  styleUrls: ['./graph-legend.component.scss']
})
export class GraphLegendComponent implements OnInit {

  @Input()
  checkModel;

  constructor(private graphLegendService: GraphLegendService) {
  }

  isDefault(data: string) {
    if (this.checkModel[data] === true) {
      if (this.isLevel() || this.isRole() || this.isCoachLink() || this.isFriendLink()) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  isLevel() {
    return this.graphLegendService.getIsLevel();
  }

  isRole() {
    return this.graphLegendService.getIsRole();
  }

  isCoachLink() {
    return this.graphLegendService.getIsCoachLink();
  }

  isFriendLink() {
    return this.graphLegendService.getIsFriendLink();
  }
  
  ngOnInit() {
  }

}
