import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../services/icons.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-side-header-icons',
  templateUrl: './side-header-icons.component.html',
  styleUrls: ['./side-header-icons.component.scss']
})
export class SideHeaderIconsComponent implements OnInit {
  public currentIconStyles;
  public currentIcons = ['phone', 'chat', 'chat-text', 'mail', 'like', 'video', 'chat-dots'];

  constructor(private ics: IconsService, public users: UsersService) {
  }

  ngOnInit(): void {
    this.currentIconStyles = this.ics.getIconsByNames(this.currentIcons);
    this.users.get();
  }

}
