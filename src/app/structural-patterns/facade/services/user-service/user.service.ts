import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getCurrentUser(): Observable<User> {
    const currentUser: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };

    return of(currentUser);
  }
}
