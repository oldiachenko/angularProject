import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
