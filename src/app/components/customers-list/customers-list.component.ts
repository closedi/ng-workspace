import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, AfterViewInit{
  public customers;
  public isChosen = {
    state: false,
    id: null,
  };

  @ViewChild('ref') element: ElementRef;

  constructor(public userS: UsersService) {
  }

  ngOnInit(): void {
   this.customers = this.userS.get();
 }

 ngAfterViewInit(): void {
    console.log(this.element.nativeElement);
 }

  chooseChat(ev): void {
    if (!this.isChosen.state) {
      this.isChosen.state = !this.isChosen.state;
      this.isChosen.id = 1;
      ev.target.closest('.customer__row').classList.add('active');
    } else {
      this.isChosen.state = !this.isChosen.state;
      ev.target.closest('.customer__row').classList.remove('active');
    }
  }

}
