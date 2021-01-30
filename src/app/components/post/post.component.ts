import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/posts/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post!: Post;

userId!: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = this.activatedRoute.parent?.params._value.id;
  }
  goToPostText(): void {
this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});
  }
  ngOnInit(): void {
  }


}
