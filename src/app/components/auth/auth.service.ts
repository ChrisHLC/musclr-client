import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {RequestOptions} from './request-options.interface';
import {Subject} from 'rxjs/Subject';
import {FriendRequest} from '../../models/friend-request.model';

@Injectable()
export class AuthService {

  private usersUrl = environment.serverUrl + 'users/';
  private friendsUrl = environment.serverUrl + 'friend-requests/';
   friendRequestNumber = new Subject<number>();
  friendRequestNumber$ = this.friendRequestNumber.asObservable();

  private httpOptions: RequestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response'
  };

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string) {
    const body = {email, password};

    return this.httpClient.post(this.usersUrl + 'login', body, this.httpOptions)
      .map((httpResponse: HttpResponse<any>) => {
        localStorage.setItem('token', httpResponse.headers.get('x-authorization'));
        this.getFriendRequests().subscribe(
          (data: FriendRequest[]) => this.friendRequestNumber.next(data.length)
        );
        return httpResponse.body;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }

  getId(): string {
    const token = localStorage.getItem('token');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64))._id;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== '';
  }

  getFriendRequests() {
    return this.httpClient.get(this.friendsUrl);
  }

}
