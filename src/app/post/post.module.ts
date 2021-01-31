import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {PostResolveService} from './services/post-resolve.service';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostService, PostResolveService]
})
export class PostModule { }
