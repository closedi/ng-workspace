import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Store} from '@ngrx/store';
import {push, pushMessage} from '../../store/app.actions';
import {Message} from '../../../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  public chatStartedAt = Date.now();
  public userInput = '';
  public abbr = '';
  public userName = '';
  public messages: Message[] = [];
  public messageQueue$;
  public activeChat$;
  @ViewChild('focus') element: ElementRef;

  constructor(private ws: WebsocketService, private store: Store<{activeChat, messageQueue}>) {
    this.activeChat$ = this.store.select('activeChat');
    this.messageQueue$ = this.store.select('messageQueue');
  }

  ngOnInit(): void {
    this.ws.storePushInit();
    this.activeChat$.subscribe(value => {
      if (value.name) {
        this.userName = value.name;
        const name = value.name.split(' ');
        this.abbr = (name.length > 1) ?  (name[0].charAt(0) + name[1].charAt(0)).toUpperCase() : name[0].charAt(0).toUpperCase();
        this.messages = value.messages.slice();
      }
    });
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

  inputHandle(event) {
    const trimmed = this.userInput.trim();
    this.element.nativeElement.focus();
    if (trimmed) {
      if (event.type === 'click' || (event.keyCode === 13 && !event.shiftKey)) {
        console.log(this.messages);
        this.userInput = '';
        this.messages.push({type: 'SENT', name: this.userName, message: trimmed, time: Date.now()});
        this.store.dispatch(push({message: {type: 'SENT', name: this.userName, message: trimmed, time: Date.now()}}));
        this.ws.send({type: 'SENT', name: this.userName, message: trimmed, time: Date.now()});
      }
    } else {
      this.userInput = '';
    }
  }
}
