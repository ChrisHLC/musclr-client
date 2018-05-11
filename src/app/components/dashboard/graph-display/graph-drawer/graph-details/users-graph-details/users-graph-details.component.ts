import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersGraphDetailsService } from './users-graph-details.service';
import { Link, Node } from '../../../d3/models';

@Component({
  selector: 'app-users-graph-details',
  templateUrl: './users-graph-details.component.html',
  styleUrls: ['./users-graph-details.component.scss']
})
export class UsersGraphDetailsComponent implements OnInit {

  public nodes;
  public links;

  public nodeButtons = [{ id: 'level', label: 'Niveau' }, { id: 'role', label: 'Rôle' }];
  public radioModel: string = "";

  constructor(private userGraphService: UsersGraphDetailsService) { }

  ngOnInit() {
    // this.nodes = this.userGraphService.getNodes();
  }

  nodeColor(data: string) {
    this.nodes = this.userGraphService.getNodes();
    if (this.radioModel === 'level') {
      this.nodes.forEach(function (node: Node) {
        switch (node.level) {
          case 'Gold':
            node.color = '#D4AF37';
            break;
          case 'Silver':
            node.color = '#C0C0C0';
            break;
          case 'Bronze':
            node.color = '#CD7F32';
            break;
        }
      });
      this.userGraphService.setNodes(this.nodes);
    }
    if (this.radioModel === 'role') {
      this.nodes.forEach(function (node: Node) {
        switch (node.role) {
          case 'MusclR':
            node.color = '#0040ff';
            break;
          case 'CoachR':
            node.color = '#000000';
            break;
        }
      });
      this.userGraphService.setNodes(this.nodes);
    }

  }
}
