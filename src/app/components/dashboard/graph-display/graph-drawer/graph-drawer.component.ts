import {Component, Input, OnInit} from '@angular/core';
import {Link, Node} from '../d3/models';

@Component({
  selector: 'app-graph-drawer',
  templateUrl: './graph-drawer.component.html',
  styleUrls: ['./graph-drawer.component.scss']
})
export class GraphDrawerComponent implements OnInit {

  @Input()
  nodes: Node[] = [];
  @Input()
  links: Link[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
