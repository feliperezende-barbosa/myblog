import { Comment } from './../../models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'comment-view',
    templateUrl: './comment-view.component.html'
})
export class CommentViewComponent implements OnInit {

    comments: Comment[];
    postId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commentService: CommentService
    ) { 
        route.params.subscribe(p => {
            this.postId = +p['id'];
        });
    }

    ngOnInit() {
        this.commentService.getComments(this.postId)
            .subscribe(
                comment => this.comments = comment
            );
     }


}