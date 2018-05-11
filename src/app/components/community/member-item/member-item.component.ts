import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {MatSnackBar} from '@angular/material';

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

}
