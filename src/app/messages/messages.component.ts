import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public messages(): Message[] {
    return this.messageService.messages;
  }

  public isAnyMessageAvailable(): boolean {
    return this.messages().length > 0;
  }

  public clearMessages() {
    this.messageService.clear();
  }
}
