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
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  // eauivalent of componentDidMount in React
  ngOnInit() {
    // you mutate properties in here, rather than in the constructor

    // async mock
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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: false,
        balance: 2999,
        registered: new Date('11/08/2017 11:04:11')
      },
      {
        firstName: 'Gojono',
        lastName: 'Motu',
        age: 25,
        address: {
          city: 'Bordeaux',
          street: 'Place de la Victoie'
        },
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        balance: 3099,
        registered: new Date('05/04/2011 07:15:05')
      },
      {
        firstName: 'Malafadha',
        lastName: 'Dinyo',
        age: 42,
        address: {
          city: 'Dakar',
          street: 'Rue de la conquete'
        },
        image: 'http://lorempixel.com/600/600/people/8',
        isActive: true,
        balance: 1599,
        registered: new Date('02/18/2019 08:55:32')
      }
    ];

    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '' : '60px',
      'font-size': this.showExtended ? '' : '30px',
      'font-weight': this.showExtended ? '' : 'bold'
    };
  }

}
