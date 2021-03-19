import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-workzone',
  templateUrl: './workzone.component.html',
  styleUrls: ['./workzone.component.scss']
})
export class WorkzoneComponent implements OnInit{
  public activeChat$;

  constructor(private ws: WebsocketService, private store: Store<{activeChat}>) {
    this.activeChat$ = this.store.select('activeChat');
  }

  ngOnInit() {
    this.ws.init();
  }
}
