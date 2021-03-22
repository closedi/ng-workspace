import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {interval} from 'rxjs';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  public userWaiting = 0;
  private interval = interval(1);
  public activeUser$;

  public get abbr(): string {
    if (this.activeUser$.name) {
      const name = this.activeUser$.name.split(' ');
      return (name.length > 1) ? name[0].charAt(0) + name[1].charAt(0) : name[0].charAt(0);
    }
  }

  constructor(private store: Store<{ activeChat }>) {
    this.activeUser$ = this.store.select('activeChat');
  }

  @Input() public user;

  ngOnInit(): void {
    this.interval.subscribe(
      () => {
          this.userWaiting = Date.now() - this.user.messages[this.user.messages.length - 1].time;
      }
    );
  }
}
