import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  friendRequestNumber: number;

  mySections = [
    {'name': 'Accueil', 'routerLink': '/'},
    {'name': 'News', 'routerLink': '/news'},
    {'name': 'Communauté', 'routerLink': '/community'},
    {'name': 'Exercices', 'routerLink': '/exercises'},
    {'name': 'Séances', 'routerLink': '/workout'},
    {'name': 'Dashboard', 'routerLink': '/dashboard'}
  ];

  selectedIndex: number;

  select(index: number) {
    this.selectedIndex = index;
  }

  thisFocus() {
    this.selectedIndex = -1;
  }


  constructor(private authService: AuthService, private snackbar: MatSnackBar) {

    this.authService.friendRequestNumber$.subscribe(
      (data: number) => this.friendRequestNumber = data
    );
  }

  ngOnInit() {
    this.selectedIndex = 0;
  }

  logout() {
    this.authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  acceptFriendRequest() {
    this.authService.friendRequestNumber.next(0);
    this.snackbar.open('Demande d\'ami acceptée', null, {
      duration: 1500
    });
  }

  refuseFriendRequest() {
    this.authService.friendRequestNumber.next(0);
    this.snackbar.open('Demande d\'ami refusée', null, {
      duration: 1500
    });
  }

}
