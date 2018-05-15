import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../../models/chat.model';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {

  @Input() message: Chat;
  @Input() friend: User;
  result = 50;

  constructor() { }

  ngOnInit() {
  }

}
