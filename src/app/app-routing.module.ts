import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {FullUserComponent} from './components/full-user/full-user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import {FullPostComponent} from './components/full-post/full-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [
      {
        path: ':id', component: FullUserComponent, children: [
          {path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [
              {path: ':id', component: FullPostComponent}
            ]}
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
