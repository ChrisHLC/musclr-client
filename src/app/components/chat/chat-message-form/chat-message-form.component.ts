import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent implements OnInit {
  messageToSend: string;
  @Input() friend: User;
  // user: User = this.userService.getUserConnected();

  inProgress = false;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.inProgress = true;
    this.chatService.sendMessage('Romeo', this.friend.username, this.messageToSend).subscribe(
      data => {
        console.log(data);
      },
      errorCode => console.log(errorCode),
      () => {
        this.messageToSend = '';
      }
    );
  }

}
