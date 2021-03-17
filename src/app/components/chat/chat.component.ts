import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  public userInput = '';
  @ViewChild('focus') element: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

  inputHandle(event) {
    const trimmed = this.userInput.trim();
    this.element.nativeElement.focus();
    if (trimmed) {
      if (event.type === 'click' || (event.keyCode === 13 && !event.shiftKey)) {
        this.userInput = '';
      }
    } else {
      this.userInput = '';
    }
  }
}
