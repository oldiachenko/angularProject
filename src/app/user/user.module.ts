import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from './services/user-resolve.service';
import { FullUserComponent } from './components/full-user/full-user.component';


@NgModule({
  declarations: [UserComponent, UsersComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService, UserResolveService]
})
export class UserModule { }
