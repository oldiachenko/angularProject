import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserAddressComponent} from './user-address/user-address.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'link/home', component: HomeComponent
  },
    {
     path: 'link/users', component: UsersComponent, children: [{
       path: ':id', component: UserAddressComponent
      }]
    }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
