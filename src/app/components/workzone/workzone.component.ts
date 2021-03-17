import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workzone',
  templateUrl: './workzone.component.html',
  styleUrls: ['./workzone.component.scss']
})
export class WorkzoneComponent implements OnInit {
  public activeUser;

  constructor() { }

  ngOnInit(): void {
  }

}
