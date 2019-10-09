import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitylogService {

  constructor() { }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
}
