import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageService {

  public messages: Message[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push({
      time: new Date(),
      text: message
    });
  }

  clear() {
    this.messages = [];
  }

}
