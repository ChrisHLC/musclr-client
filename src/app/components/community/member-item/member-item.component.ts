import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {MatSnackBar} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {


  @Input()
  user: User;

  isDisabled = false;

  constructor(private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar() {
    this.isDisabled = true;
    this.snackbar.open('Demande d\'ami envoyée', null, {
      duration: 1500
    });
  }


  getAge(): number {
    return moment().diff(this.user.birthday, 'years');
  }
}
