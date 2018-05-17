import { Injectable } from '@angular/core';

@Injectable()
export class GraphLegendService {

  public isLevel = false;
  public isRole = false;
  
  public isCoachLink = false;
  public isFriendLink = false;
  

  constructor() { }

  getIsLevel() {
    return this.isLevel;
  }

  setIsLevel(level) {
    this.isLevel = level;
  }

  getIsRole() {
    return this.isRole;
  }

  setIsRole(role) {
    this.isRole = role;
  }
  getIsCoachLink() {
    return this.isCoachLink;
  }

  setIsCoachLink(coachLink) {
    this.isCoachLink = coachLink;
  }

  getIsFriendLink() {
    return this.isFriendLink;
  }

  setIsFriendLink(friendLink) {
    this.isFriendLink = friendLink;
  }

}
