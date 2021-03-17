import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  @Input() public user;

  ngOnInit(): void {
  }

}
