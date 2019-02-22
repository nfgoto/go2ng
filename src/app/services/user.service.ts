import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any >;

  constructor() {
    this.users = [
      {
        firstName: 'Toto',
        lastName: 'GOTO',
        email: 'toto@mail.com',
        isActive: false,
        registered: new Date('11/08/2017 11:04:11'),
        hideDetails: true
      },
      {
        firstName: 'Gojono',
        lastName: 'Motu',
        email: 'gojono@mail.com',
        isActive: true,
        registered: new Date('05/04/2011 07:15:05'),
        hideDetails: true
      },
      {
        firstName: 'Malafadha',
        lastName: 'Dinyo',
        email: 'malafadha@mail.com',
        isActive: true,
        registered: new Date('02/18/2019 08:55:32'),
        hideDetails: true
      }
    ];
  }

  getData() {
    this.data = new Observable(
      (observer) => {
        setTimeout(() => {
          // publish to subscribers
          observer.next(1);
        }, 2000);

        setTimeout(() => {
          // publish to subscribers
          observer.next(2);
        }, 3000);

        setTimeout(() => {
          // publish to subscribers
          observer.next(3);
        }, 4000);

        setTimeout(() => {
          // publish to subscribers
          observer.next(4);
        }, 5000);
      }
    );

    return this.data;
  }

  getUsers(): Observable<User[]> {
    // 'of' function returns an observable
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
