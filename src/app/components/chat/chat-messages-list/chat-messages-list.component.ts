import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';
import {User} from '../../../models/user.model';
import {Observable} from 'rxjs/Observable';
import {Chat} from '../../../models/chat.model';

@Component({
  selector: 'app-chat-messages-list',
  templateUrl: './chat-messages-list.component.html',
  styleUrls: ['./chat-messages-list.component.scss']
})
export class ChatMessagesListComponent implements OnInit {

  @Input() friend: User;
  // user: User = this.userService.getUserConnected();
  messagesList: Chat[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.getMessagesList();

    setInterval(() => {
      this.getMessagesList();
    }, 10);

  }

  getMessagesList() {
    this.chatService.getMessages('Romeo', this.friend.username).subscribe(
      data => {
        this.messagesList = data;
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

}
