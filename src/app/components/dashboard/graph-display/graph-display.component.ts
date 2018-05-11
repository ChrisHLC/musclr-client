import {Link, Node} from './d3/models';
import {GraphComponent} from './visuals/graph/graph.component';
import {Neo4jService} from './neo4j.service';
import {Observable} from 'rxjs/Observable';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { UsersGraphDetailsComponent } from './graph-drawer/graph-details/users-graph-details/users-graph-details.component';
import { UsersGraphDetailsService } from './graph-drawer/graph-details/users-graph-details/users-graph-details.service';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit, OnDestroy {

  public buttons = [{id: 'users', label: 'Utilisateurs'},
    {id: 'gyms', label: 'Salles'},
    {id: 'towns', label: 'Villes'},
    {id: 'events', label: 'Événement'}];
  public checkModel: any = {users: true, gyms: false, towns: false, events: false};

  public nodes: Node[] = [];
  public links: Link[] = [];

  @ViewChild(GraphComponent) graph: GraphComponent;

  constructor(private neo4jService: Neo4jService, private userGraphService: UsersGraphDetailsService) {
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    const self = this;

    this.neo4jService.getUsers()
      .subscribe((data: { links: Link[], nodes: Node[] }) => {

          data.nodes.forEach(function (node) {
            self.nodes.push(new Node(node.id, node.group, node.role, node.username, node.level));
          });
          this.userGraphService.setNodes(self.nodes);
          this.graph.forceDirectedGraph.nodes = self.nodes;
          this.graph.forceDirectedGraph.initNodes();
           
        
          data.links.forEach(function (link) {
            self.links.push(new Link(link.source, link.target, link.label, link.sourceGroup, link.targetGroup));
          });
          this.userGraphService.setLinks(self.links);
          this.graph.forceDirectedGraph.links = self.links;
          this.graph.forceDirectedGraph.initLinks();
          
        },
        error => Observable.throw(error || 'Server error')
      );
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  addData(data: string) {
    const self = this;
    if (this.checkModel[data] === true) {
      switch (data) {
        case 'users':
          this.neo4jService.getUsers()
            .subscribe((data: { links: Link[], nodes: Node[] }) => {

                data.nodes.forEach(function (node) {
                  self.nodes.push(new Node(node.id, node.group, node.role, node.username, node.level));
                });
                data.links.forEach(function (link) {
                  self.links.push(new Link(link.source, link.target, link.label, link.sourceGroup, link.targetGroup));
                });
                this.userGraphService.setNodes(self.nodes);
                this.userGraphService.setLinks(self.links);
                self.graph.forceDirectedGraph.updateData(self.nodes, self.links);

              },
              error => Observable.throw(error || 'Server error')
            );
          break;
        case 'events':
          this.neo4jService.getEvents()
            .subscribe((neo4j: { links: Link[], nodes: Node[] }) => {

                neo4j.nodes.forEach(function (node) {
                  self.nodes.push(new Node(node.id, node.group, node.role, node.workout, 'Silver'));
                });

                neo4j.links.forEach(function (link) {
                  self.links.push(new Link(link.source, link.target, link.label, link.sourceGroup, link.targetGroup));
                });

                // self.graph.forceDirectedGraph.initLinks();
                self.graph.forceDirectedGraph.updateData(self.nodes, self.links);
              },
              error => Observable.throw(error || 'Server error')
            );
          break;
      }
    } else {
      // apparently you have to remove the visuals (first two line) but also the data in the force graph
      self.links = self.links.filter(link => link.sourceGroup !== data && link.targetGroup !== data);
      self.nodes = self.nodes.filter(node => node.role !== data);
      self.graph.forceDirectedGraph.updateData(self.nodes, self.links);
    }
  }

}
