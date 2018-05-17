import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CommunityService {

  private usersUrl = environment.serverUrl + 'users/';


  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  loadUsers() {
    return this.httpClient.get(this.usersUrl + 'all');
  }

  loadCarouselUsers() {
    return this.httpClient.get(this.usersUrl + 'carousel/' + this.authService.getId());
  }
}
