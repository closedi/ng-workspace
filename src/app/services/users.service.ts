import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  public userName$: Observable<string>;
  public url = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getUser(): User[] {
    const result: User[] = [];
    this.http.get<User[]>(this.url).subscribe(value => {
        for (let i = 0; i < value.length; i++) {
          result.push(value[i]);
        }
        return result;
      }
    );
    return result;
  }

  delete(name): string {
    const result = '';
    this.userName$.subscribe();
    return result;
  }
}

