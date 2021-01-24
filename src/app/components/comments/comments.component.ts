import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments!: Comment [];
  singleComment!: Comment;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
  getBubble(comment: Comment): void {
    this.singleComment = comment;
  }

}
