import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
// import {push} from '../store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private url = 'ws://localhost:8333';
  public ws = null;
  public messageQueue$: Observable<any>;

  constructor(private store: Store<{messageQueue}>) {
    this.messageQueue$ = this.store.select('messageQueue');
  }

  init(): void {
    this.ws = new WebSocket(this.url);

    this.ws.onmessage = (event) => {
      // this.store.dispatch(push({message: {type: 'RECEIVED', message: event.data, time: Date.now()}}));
    };
  }

  send(msg): void {
    const message = JSON.stringify(msg);
    this.ws.send(message);
  }
}
