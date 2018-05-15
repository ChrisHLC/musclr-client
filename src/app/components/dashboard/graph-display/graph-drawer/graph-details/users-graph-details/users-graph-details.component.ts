import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersGraphDetailsService } from './users-graph-details.service';
import { Link, Node } from '../../../d3/models';
import * as _ from "lodash";

@Component({
  selector: 'app-users-graph-details',
  templateUrl: './users-graph-details.component.html',
  styleUrls: ['./users-graph-details.component.scss']
})
export class UsersGraphDetailsComponent implements OnInit {

  public nodes;
  public links;

  public nodeButtons = [{ id: 'level', label: 'Niveau' }, { id: 'role', label: 'Rôle' }];
  public radioModelNode: string = "";

  public nodeSizeButtons = [{ id: 'activity', label: 'Activités' },
  { id: 'Friend', label: 'Ami(e)s' },
  { id: 'events', label: 'Evénements' },
  { id: 'ranking', label: 'Notes' }];
  public radioModelNodeSize: string = "";

  public linkButtons = [{ id: 'Coach', label: 'Coach' }, { id: 'Friend', label: 'Ami(e)s' }];
  public checkModelLink: any = { Coach: false, Friend: false };

  public linkSizeButtons = [
    { id: 'events', label: 'Evénements' },
    { id: 'proximity', label: 'Proximité' }];
  public radioModelLinkSize: string = "";

  constructor(private userGraphService: UsersGraphDetailsService) { }

  ngOnInit() {
  }

  nodeColor(data: string) {
    this.nodes = this.userGraphService.getNodes();
    if (this.radioModelNode === 'level') {
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
    }
    if (this.radioModelNode === 'role') {
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
    }
    this.userGraphService.setNodes(this.nodes);
  }

  nodeSize(data: string) {
    let self = this;
    this.links = this.userGraphService.getLinks();
    this.nodes = this.userGraphService.getNodes();
    let friendLink = _.filter(this.links, ['label', data]);
    let list = _.merge(_.groupBy(friendLink, 'source.id'), _.groupBy(friendLink, 'target.id'));
    _.forEach(list, function (value, key) {
      _.set((_.filter(self.nodes, { 'id': Number(key) })), '[0].normal', (value.length / 15));
    })
  }

  linkColor(data: string) {
    this.links = this.userGraphService.getLinks();
    if (this.checkModelLink[data] === true) {
      this.links.forEach(function (link: Link) {
        if (data === link.label) {
          switch (link.label) {
            case 'Coach':
              link.color = '#2E86C1';
              break;
            case 'Friend':
              link.color = '#F40D45';
              break;
          }
        } else {
          link.color = "#E5E5E5"
        }
      });
      this.userGraphService.setLinks(this.links);
    }
  }
}