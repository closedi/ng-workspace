import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Store} from '@ngrx/store';
import {activateChat, deactivateChat, push, pushMessage, pushMessagesOnHold, reset, resetMessages} from '../../store/app.actions';
import {Message} from '../../../message';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit{
  private cloneDeep = require('lodash.clonedeep');
  public messageQueue: Message[] = [];
  public messageQueue$;
  public firstMessage: Message;
  public activeUserName = '';
  public users = [];
  public users$;
  public activeChat$;
  constructor(public usersService: UsersService, private store: Store<{usersQueue, activeChat, messageQueue}>) {
    this.users$ = this.store.select('usersQueue');
    this.activeChat$ = this.store.select('activeChat');
    this.messageQueue$ = this.store.select('messageQueue');
  }

  ngOnInit(): void {
    this.activeChat$.subscribe(value => {
      if (value.name) {
        this.activeUserName = value.name;
        this.firstMessage = Object.assign({}, value.messages[0]);
      }
    });
    this.messageQueue$.subscribe(message => {
      this.messageQueue = message;
    });
    this.users$.subscribe(user => {
      this.users = this.cloneDeep(user);
    });
 }

  onClick(user) {
    if (user.name === this.activeUserName) {
      this.users.map(item => {
        if (item.name === user.name) {
          item.messages = this.messageQueue;
          this.store.dispatch(resetMessages());
        }
      });

      this.store.dispatch(pushMessagesOnHold({users: this.users}));
      this.store.dispatch(deactivateChat());
      this.activeUserName = '';
    } else {
      this.store.dispatch(activateChat({chat: user}));
      this.store.dispatch(push({message: this.firstMessage}));
      return;
    }
  }
}
