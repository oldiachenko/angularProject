import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Users} from '../../../data/users';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = Users;
  name = new FormControl('', [Validators.required, Validators.pattern(/[A-z]/), Validators.minLength(3), this.customValidator]);
  age = new FormControl('', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern(/^[0-9]+(?!.)/)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  city = new FormControl('');
  userForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email,
    city: this.city
  });
  newUser!: User;

  customValidator(inputData: AbstractControl): any {
    if (inputData.value.includes('fukc')) {
      return {error: true, msg: 'Invalid name'};
    } else {
      return null;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
  addUser(): void {
    if (this.users.find(value => value.email === this.userForm.controls.email.value)){
      return alert('User with this email exists');
    }
    this.newUser = {
      name: this.userForm.controls.name.value,
      age: this.userForm.controls.age.value,
      email: this.userForm.controls.email.value,
      city: this.userForm.controls.city.value
    };
    this.users.push(this.newUser);
  }
}
