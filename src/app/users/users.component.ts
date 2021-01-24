import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {users} from '../../data/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User [] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
