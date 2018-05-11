import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {CommunityService} from './community.service';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {

  public checkModel: any = {bronze: false, silver: false, gold: false};

  public fullUserList: User[] = [];
  public filteredUserList: User[] = [];
  term: FormControl = new FormControl();
  termSubscription: Subscription;

  constructor(private communityService: CommunityService) {
    this.communityService.loadUsers().subscribe(
      (data: User[]) => {
        this.fullUserList = data;
        this.filteredUserList = data;
      }
    );
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
    this.termSubscription = this.term.valueChanges
      .subscribe(
        (term: String) => {
          const filterBy = term ? term.toLowerCase() : null;
          this.filteredUserList =
            filterBy ? this.fullUserList.filter((user: User) => user.username.toLowerCase().startsWith(filterBy)) : this.fullUserList;
        }
      );
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  // TODO add some pagination
}
