import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Relationship} from '../../models/relationship.model';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class RelationshipService {

  private relationshipUrl = environment.chatServerUrl + 'relationship/';

  constructor(private http: HttpClient) {
  }

  getFriendsList(username: string): Observable<User[]> {
    return this.http.get<User[]>(this.relationshipUrl + 'friendsList/' + username);
  }

  sendFriendRequest(body: Object): Observable<Relationship> {
    const bodyString = JSON.stringify(body);
    return this.http.post<Relationship>(this.relationshipUrl + 'sendRequest', bodyString, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  acceptFriendRequest(body: Object): Observable<Relationship> {
    const bodyString = JSON.stringify(body);
    return this.http.post<Relationship>(this.relationshipUrl + 'acceptRequest', bodyString, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
