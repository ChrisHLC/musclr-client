import {Link, Node} from './d3/models';
import {GraphComponent} from './visuals/graph/graph.component';
import {Neo4jService} from './neo4j.service';
import {Observable} from 'rxjs/Observable';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

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

  nodes: Node[] = [];
  links: Link[] = [];

  @ViewChild(GraphComponent) graph: GraphComponent;

  constructor(private neo4jService: Neo4jService) {
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    const self = this;

    this.neo4jService.getUsers()
      .subscribe((data: { links: Link[], nodes: Node[] }) => {

          data.nodes.forEach(function (node) {
            self.nodes.push(new Node(node.id, node.group, node.username, node.level));
          });
          this.graph.forceDirectedGraph.initNodes();

          data.links.forEach(function (link) {
            self.links.push(new Link(link.source, link.target, link.label, link.sourceGroup, link.targetGroup));
          });

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
                  self.nodes.push(new Node(node.id, node.group, node.username, node.level));
                });
                data.links.forEach(function (link) {
                  self.links.push(new Link(link.source, link.target, link.label, link.sourceGroup, link.targetGroup));
                });
                self.graph.forceDirectedGraph.updateData(self.nodes, self.links);

              },
              error => Observable.throw(error || 'Server error')
            );
          break;
        case 'events':
          this.neo4jService.getEvents()
            .subscribe((neo4j: { links: Link[], nodes: Node[] }) => {

                neo4j.nodes.forEach(function (node) {
                  self.nodes.push(new Node(node.id, node.group, node.workout, 'Silver'));
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
      self.nodes = self.nodes.filter(node => node.group !== data);
      self.graph.forceDirectedGraph.updateData(self.nodes, self.links);
    }
  }
}
