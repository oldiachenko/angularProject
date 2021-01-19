import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserAddressComponent } from './user-address/user-address.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    UserComponent,
    UserAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
