import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {Chat} from '../../../models/chat.model';
import {Observable} from 'rxjs/Observable';
import {RelationshipService} from '../relationship.service';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-friends-list',
  templateUrl: './chat-friends-list.component.html',
  styleUrls: ['./chat-friends-list.component.scss']
})
export class ChatFriendsListComponent implements OnInit {

  @Input() user: User;
  @Output()
  onFriendSelected: EventEmitter<User> = new EventEmitter<any>();

  friendsList: User[];
  friendSelected: User;
  chatList: Chat[];

  constructor(private relationshipService: RelationshipService,
              private chatService: ChatService) {
  }

  clicked(friend: User): void {
    this.friendSelected = friend;
    this.onFriendSelected.emit(friend);
  }

  getFriendsList() {
    this.relationshipService.getFriendsList('Romeo')
      .subscribe(
        data => {
          this.friendsList = data;
        },
        errorCode => console.log(errorCode),
        () => {
          console.log('friendSelected selected by default : ' + this.friendsList[0].username);
          this.clicked(this.friendsList[0]);
        }
      );
  }

  getLastMessagesByUsername() {
    this.chatService.getLastMessagesByUsername('Romeo')
      .subscribe(
        data => {
          this.chatList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getLastMessageBetweenFriends(friend_name) {
    for (const chat of this.chatList) {
      if (chat.user_from_name === friend_name && chat.user_to_name === this.user.username) {
        return chat.message;
      }
      if (chat.user_to_name === friend_name && chat.user_from_name === this.user.username) {
        return 'vous : ' + chat.message;
      }
    }
  }

  ngOnInit() {
    this.getFriendsList();
    this.getLastMessagesByUsername();

    setInterval(() => {
      this.getLastMessagesByUsername();
    }, 10);

  }

}
