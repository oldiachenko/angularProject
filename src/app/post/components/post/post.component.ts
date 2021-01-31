import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post!: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  goTo(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});
  }
  ngOnInit(): void {
  }


}
