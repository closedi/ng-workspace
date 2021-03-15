import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
  };
  phone: number;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  public users: User[] = [];
  public url = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  get(): void {
    this.http.get<User[]>(this.url).subscribe(value => this.users = value);
  }
}
