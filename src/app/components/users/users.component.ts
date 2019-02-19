import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  // eauivalent of componentDidMount in React
  ngOnInit() {
    // you mutate properties in here, rather than in the constructor

    this.users = [
      {
        firstName: 'Toto',
        lastName: 'GOTO',
        age: 30,
        address: {
          city: 'Paris',
          street: 'Place de la Bastille',
          state: 'IDF'
        },
        isActive: false,
        registered: new Date('11/08/2017 11:04:11'),
        hide: true
      },
      {
        firstName: 'Gojono',
        lastName: 'Motu',
        age: 25,
        address: {
          city: 'Bordeaux',
          street: 'Place de la Victoie'
        },
        isActive: true,
        registered: new Date('05/04/2011 07:15:05'),
        hide: true
      },
      {
        firstName: 'Malafadha',
        lastName: 'Dinyo',
        age: 42,
        address: {
          city: 'Dakar',
          street: 'Rue de la conquete'
        },
        isActive: true,
        registered: new Date('02/18/2019 08:55:32'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }
}
