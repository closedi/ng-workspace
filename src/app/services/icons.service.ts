import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

interface Icons {
  name: string;
  class: string;
}

@Injectable({
  providedIn: 'root'
})

export class IconsService {
  public icons: Icons[] = [
    {name: 'headset', class: 'bi bi-headset'},
    {name: 'search', class: 'bi bi-search'},
    {name: 'person-check', class: 'bi bi-person-check'},
    {name: 'home', class: 'bi bi-house'},
    {name: 'bell', class: 'bi bi-bell'},
    {name: 'question', class: 'bi bi-question-circle'},
    {name: 'hamburger', class: 'bi bi-list'},
    {name: 'phone', class: 'bi bi-telephone'},
    {name: 'chat', class: 'bi bi-chat-left'},
    {name: 'chat-text', class: 'bi bi-chat-left-text'},
    {name: 'chat-dots', class: 'bi bi-chat-left-dots'},
    {name: 'mail', class: 'bi bi-envelope'},
    {name: 'like', class: 'bi bi-hand-thumbs-up'},
    {name: 'video', class: 'bi bi-camera-video'}
  ];

  get arrayNames(): Array<string> {
   return this.icons.slice().map(item => item.name);
  }

  constructor() {
  }

  getIconsByNames(array): Array<string> {
    const res = [];
    const included = array
      .filter(item => this.arrayNames.includes(item));
    for (const item of this.icons) {
      if (included.includes(item.name)) {
        res.push(item.class);
      }
    }
    return res;
  }
}
