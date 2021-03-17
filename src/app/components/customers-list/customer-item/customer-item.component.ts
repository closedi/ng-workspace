import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit, OnChanges {
  public isActive = false;

  constructor() {
  }

  @Input() public user;
  @Input() public activeUser;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isActive = this.user.name === this.activeUser.name;
    console.log(this.activeUser);
  }
}
