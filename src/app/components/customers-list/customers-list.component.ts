import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Store} from '@ngrx/store';
import {activateChat, deactivateChat} from '../../store/app.actions';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit{
  public isActive = false;
  public usersInfo;
  public activeUserInfo;
  public activeUser = false;
  public users$;
  public activeChat$;
  constructor(public usersService: UsersService, private store: Store<{usersQueue, activeChat}>) {
    this.users$ = this.store.select('usersQueue');
    this.activeChat$ = this.store.select('activeChat');
  }

  ngOnInit(): void {
    this.usersInfo = this.usersService.getUser();
 }

  onClick(user) {
    console.log(this.activeChat$.name);
    if (user.name === this.activeChat$.name) {
      this.store.dispatch(deactivateChat());
    } else {
      this.store.dispatch(activateChat({chat: user, time: Date.now()}));
      this.isActive = true;
      return;
    }
  }

  getActiveUserInfo(user) {
   this.activeUserInfo = this.usersInfo.filter(current => current.name === user.name);
   return this.activeUserInfo[0];
  }
}
