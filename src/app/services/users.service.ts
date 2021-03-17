import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
  };
  phone: number;
  website: string;
  abbr?: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  get(): User[] {
    const result: User[] = [];
    this.http.get<User[]>(this.url).subscribe(value => {
        for (let i = value.length - 1; i > value.length - 4; i--) {
          result.push(value[i]);
        }
        return result;
      }
    );
    return result;
  }
}

