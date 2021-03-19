import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Store} from '@ngrx/store';
import {deactivateChat} from '../../store/app.actions';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public activeChat$;
  public get abbr(): string {
    let abbr;
    this.activeChat$.subscribe(value => {
      const name = value.name.split(' ');
      abbr = (name.length > 1) ?  (name[0].charAt(0) + name[1].charAt(0)).toUpperCase() : name[0].charAt(0).toUpperCase();
    });
    return abbr;
  }

  constructor(private usersService: UsersService, private store: Store<{activeChat}>) {
    this.activeChat$ = this.store.select('activeChat');
  }

  @Input() public activeUser;

  ngOnInit(): void {
  }

  deleteCurrentChat(): void {
    this.store.dispatch(deactivateChat());
  }
}
