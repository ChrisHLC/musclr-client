import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {Chat} from '../models/chat.model';

@Injectable()
export class ChatService {
  private chatUrl = environment.chatServerUrl + 'chat/';

  private friendSelected: User;

  constructor(private http: HttpClient) {
  }

  sendMessage(user_from_id, user_to_id, message): Observable<Chat> {
    const params = {
      user_from_id: user_from_id,
      user_to_id: user_to_id,
      message: message
    };
    return this.http.post(this.chatUrl, JSON.stringify(params), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(res => {
      return res;
    })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMessages(me, friend): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatUrl + me + '/' + friend);
  }

  getLastMessagesByUserId(me): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatUrl + me);
  }
}



