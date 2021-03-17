import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../services/icons.service';

@Component({
  selector: 'app-side-header-icons',
  templateUrl: './side-header-icons.component.html',
  styleUrls: ['./side-header-icons.component.scss']
})
export class SideHeaderIconsComponent implements OnInit {
  public currentIconStyles;
  public currentIcons = ['phone', 'chat', 'chat-text', 'mail', 'like', 'video', 'chat-dots'];

  constructor(private icons: IconsService) {
  }

  ngOnInit(): void {
    this.currentIconStyles = this.icons.getIconsByNames(this.currentIcons);
  }

}
