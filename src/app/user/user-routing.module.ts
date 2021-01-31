import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserResolveService} from './services/user-resolve.service';
import {FullUserComponent} from './components/full-user/full-user.component';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [
      {path: ':id', component: FullUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
