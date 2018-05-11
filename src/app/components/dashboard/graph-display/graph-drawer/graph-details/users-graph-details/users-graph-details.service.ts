import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Link, Node } from '../../../d3/models';

@Injectable()
export class UsersGraphDetailsService {

  nodes: any;
  links: any;

  constructor( ) { }

  getNodes(){
    return this.nodes;
  }

  setNodes(newNodes: Node[]){
    this.nodes = newNodes;
  }
  getLinks(){
    return this.links;
  }

  setLinks(newLinks: Link[]){
    this.links = newLinks;
  }

}
