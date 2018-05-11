import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CommunityService {

  private usersUrl = environment.serverUrl + 'users/';


  constructor(private httpClient: HttpClient) {
  }

  loadUsers() {
    return this.httpClient.get(this.usersUrl + 'all');
  }
}
