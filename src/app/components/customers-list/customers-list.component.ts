import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit{
  public activeUser = false;
  public users;
  public isChosen = {
    state: false,
    id: null,
  };

  constructor(public usersService: UsersService) {}

  @Output() public emitActiveUser = new EventEmitter();

  ngOnInit(): void {
   this.users = this.usersService.get();
 }

  onClick(user) {
    if (user === this.activeUser) {
      this.activeUser = false;
      this.emitActiveUser.emit(this.activeUser);
    } else {
      this.emitActiveUser.emit(user);
      return this.activeUser = user;
    }
  }
}
