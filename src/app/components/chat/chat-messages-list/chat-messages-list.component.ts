import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
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
  @Input() user: User;
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
    this.chatService.getMessages(this.user._id, this.friend._id).subscribe(
      data => {
        this.messagesList = data;
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

}
