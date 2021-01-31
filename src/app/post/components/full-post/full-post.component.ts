import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
post!: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation()?.extras.state as Post;
    });
  }

  ngOnInit(): void {
  }

}
