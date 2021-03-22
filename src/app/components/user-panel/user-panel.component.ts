import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Store} from '@ngrx/store';
import {deactivateChat, destroyChat} from '../../store/app.actions';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public activeChatName = '';
  public activeChat$;
  public abbr = '';
  // public get abbr(): string {
  //   if (this.activeChat$) {
  //     let abbr;
  //     this.activeChat$.subscribe(value => {
  //       const name = value.name.split(' ');
  //       abbr = (name.length > 1) ?  (name[0].charAt(0) + name[1].charAt(0)).toUpperCase() : name[0].charAt(0).toUpperCase();
  //     });
  //     return abbr;
  //   }
  // }

  constructor(private usersService: UsersService, private store: Store<{activeChat}>) {
    this.activeChat$ = this.store.select('activeChat');
  }

  @Input() public activeUser;

  ngOnInit(): void {
    this.activeChat$.subscribe(value => {
      if (value.name) {
        const name = value.name.split(' ');
        this.abbr = (name.length > 1) ?  (name[0].charAt(0) + name[1].charAt(0)).toUpperCase() : name[0].charAt(0).toUpperCase();
      }
    });
    this.activeChat$.subscribe(value => {
      this.activeChatName = value.name;
    });
  }

  deleteCurrentChat(): void {
    this.store.dispatch(destroyChat({name: this.activeChatName}));
  }
}
