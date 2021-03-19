import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Store} from '@ngrx/store';
import {push} from '../../store/app.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  public userInput = '';
  public messages = [];
  public activeChat$;
  @ViewChild('focus') element: ElementRef;
  public get abbr(): string {
      let abbr;
      this.activeChat$.subscribe(value => {
        const name = value.name.split(' ');
        abbr = (name.length > 1) ?  (name[0].charAt(0) + name[1].charAt(0)).toUpperCase() : name[0].charAt(0).toUpperCase();
    });
      return abbr;
  }

  constructor(private ws: WebsocketService, private store: Store<{activeChat}>) {
    this.activeChat$ = this.store.select('activeChat');
  }

  ngOnInit(): void {
    this.ws.storePushInit();
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

  inputHandle(event) {
    console.log(this.messages)
    const trimmed = this.userInput.trim();
    this.element.nativeElement.focus();
    if (trimmed) {
      if (event.type === 'click' || (event.keyCode === 13 && !event.shiftKey)) {
        this.messages.push(this.userInput);
        this.userInput = '';
        this.store.dispatch(push({message: {type: 'SENT', name: this.activeChat$.name, message: trimmed, time: Date.now()}}));
        this.ws.send({name: this.activeChat$.name, message: trimmed});
      }
    } else {
      this.userInput = '';
    }
  }
}
