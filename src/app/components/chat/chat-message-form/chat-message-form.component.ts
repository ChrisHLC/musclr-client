import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent implements OnInit {
  messageToSend: string;
  @Input() friend: User;
  @Input() user: User;

  inProgress = false;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.inProgress = true;
    this.chatService.sendMessage(this.user._id, this.friend._id, this.messageToSend).subscribe(
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
