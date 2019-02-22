import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService as UserService } from '../../services/user.service';

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

  data: any;

  // inject service depencies
  constructor(private userService: UserService) { }

  ngOnInit() {
    // you mutate properties in here, rather than in constructor

    // subscribe / watch an observable
    this.userService.getData().subscribe(
      data => {
        console.log(data);
      }

    );

    // get users from injected service method asynchronously
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.loaded = true;
      }
    );
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hideDetails = true;
      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
