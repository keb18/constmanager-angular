import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    if (this.messages === []) {
      this.sendMessage(message);
    } else {
      this.messages = [];
      this.sendMessage(message);
    }
  }

  // push message function
  sendMessage(message) {
    this.messages.push(message);
      // Remove message after 5 seconds
      setTimeout(() => { this.messages = []; }, 5000);
  }

  // clear the message function
  clear() {
    this.messages = [];
  }

  constructor() { }
}
