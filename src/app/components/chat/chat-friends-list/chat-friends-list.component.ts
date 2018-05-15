import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {Chat} from '../../../models/chat.model';
import {Observable} from 'rxjs/Observable';
import {RelationshipService} from '../../../services/relationship.service';
import {ChatService} from '../../../services/chat.service';
import {AuthService} from '../../auth/auth.service';

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
              private chatService: ChatService,
              private authService: AuthService) {
  }

  clicked(friend: User): void {
    this.friendSelected = friend;
    this.onFriendSelected.emit(friend);
  }

  getFriendsList() {
    this.relationshipService.getFriendsList(this.user._id)
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
    this.chatService.getLastMessagesByUserId(this.user._id)
      .subscribe(
        data => {
          this.chatList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getLastMessageBetweenFriends(friend_id) {
    for (const chat of this.chatList) {
      if (chat.user_from_id === friend_id && chat.user_to_id === this.user._id) {
        return chat.message;
      }
      if (chat.user_to_id === friend_id && chat.user_from_id === this.user._id) {
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
