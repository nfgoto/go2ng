import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: User;

    constructor() { }

    ngOnInit() {
        this.user = {
            firstName: 'Florian',
            lastName: 'GOTO',
            age: 30,
            address: {
                city: 'Paris',
                street: 'Place de la Bastille',
                state: 'Ile-de-France'
            }
        };
    }
}
