import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    // Remove message after 5 seconds
    setTimeout(() => { this.messages = []; }, 5000);
  }

  // button to clear the message
  clear() {
    this.messages = [];
  }

  constructor() { }
}
