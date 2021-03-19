import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {Store} from '@ngrx/store';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  public activeUser$;
  public get abbr(): string {
    if (this.activeUser$.name) {
      const name = this.activeUser$.name.split(' ');
      return (name.length > 1) ?  name[0].charAt(0) + name[1].charAt(0) : name[0].charAt(0);
    }
  }

  constructor(private store: Store<{activeChat}>, private users: UsersService) {
    this.activeUser$ = this.store.select('activeChat');
  }

  @Input() public user;

  ngOnInit(): void {
  }
}
