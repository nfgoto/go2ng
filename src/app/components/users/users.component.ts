import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';

const initialUserState: User = {
  firstName: '',
  lastName: '',
  email: '',
  isActive: false,
  registered: null as Date,
  hideDetails: false
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // deep copy to avoid side effects
  user: User = {
    ...initialUserState,
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  // eauivalent of componentDidMount in React
  ngOnInit() {
    // you mutate properties in here, rather than in the constructor

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

    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hideDetails = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }
}
