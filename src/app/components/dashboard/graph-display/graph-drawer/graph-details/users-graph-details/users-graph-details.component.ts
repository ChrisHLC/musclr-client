import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersGraphDetailsService } from './users-graph-details.service';
import { Link, Node } from '../../../d3/models';
import * as _ from "lodash";
import { GraphLegendService } from '../../../graph-legend/graph-legend.service';

@Component({
  selector: 'app-users-graph-details',
  templateUrl: './users-graph-details.component.html',
  styleUrls: ['./users-graph-details.component.scss']
})
export class UsersGraphDetailsComponent implements OnInit {

  public nodes;
  public links;
  private friendColor = '#F40D45';
  private coachColor = '#2E86C1';


  public nodeButtons = [{ id: 'level', label: 'Niveau' }, { id: 'role', label: 'Rôle' }];
  public radioModelNode: string = "";

  public nodeSizeButtons = [{ id: 'Create', label: 'Activités' },
  { id: 'Friend', label: 'Ami(e)s' },
  { id: 'Participate', label: 'Evénements' },
  { id: 'ranking', label: 'Notes' }];
  public radioModelNodeSize: string = "";

  public linkButtons = [{ id: 'Coach', label: 'Coach' }, { id: 'Friend', label: 'Ami(e)s' }];
  public radioModelLink: string = "";

  public linkSizeButtons = [
    { id: 'Participate', label: 'Evénements' },
    { id: 'proximity', label: 'Proximité' }];
  public radioModelLinkSize: string = "";

  constructor(private userGraphService: UsersGraphDetailsService, private graphLegendService: GraphLegendService) { }

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
      this.graphLegendService.setIsLevel(true);
      this.graphLegendService.setIsRole(false);
    }
    if (this.radioModelNode === 'role') {
      this.nodes.forEach(function (node: Node) {
        switch (node.role) {
          case 'MusclR':
            node.color = '#3399ff';
            break;
          case 'CoachR':
            node.color = '#ff3333';
            break;
        }
      });
      this.graphLegendService.setIsRole(true);
      this.graphLegendService.setIsLevel(false);
    }
    this.userGraphService.setNodes(this.nodes);
  }

  nodeSize(data: string) {
    let self = this;
    this.links = this.userGraphService.getLinks();
    this.nodes = this.userGraphService.getNodes();
    let linkList = _.filter(this.links, ['label', data]);
    let list = _.merge(_.groupBy(linkList, 'source.id'), _.groupBy(linkList, 'target.id'));
    _.forEach(list, function (value, key) {
      _.set((_.filter((_.filter(self.nodes, ['group', 'users'])), { 'id': Number(key) })), '[0].normal', (value.length / 15));
    })
  }

  linkColor(data: string) {
    let self = this;
    this.links = this.userGraphService.getLinks();
    var list = _.filter(this.links, ['label', data])
    if (data === 'Coach') {
      _.forEach(list, function (link: Link) {
        _.set(link, 'color', self.coachColor);
      });
      this.graphLegendService.setIsCoachLink(true);
    } else if (data === 'Friend') {
      _.forEach(list, function (link: Link) {
        _.set(link, 'color', self.friendColor);
      });
      this.graphLegendService.setIsFriendLink(true);
    }
  }


  linkSize(data: string) {
    let self = this;
    this.links = this.userGraphService.getLinks();
    this.nodes = this.userGraphService.getNodes();
    var map: Map<string, Link[]> = new Map<string, Link[]>();
    _.forEach((_.filter(this.nodes, ['group', 'users'])), function (user: Node) {
      var link = _.filter((_.filter(self.links, ['label', data])), ['source.id', user.id]);
      map.set(user.id, link);
    });
    _.forEach((_.filter(this.links, ['label', 'Friend'])), function (friendLink: Link) {
      var events = _.intersectionBy(map.get(friendLink.source.id), map.get(friendLink.target.id), 'target.id');
      if (events.length > 0) {
        _.set(friendLink, 'size', (events.length * 2));
        _.set(friendLink, 'color', "#000033");
      }
    });
  }
}