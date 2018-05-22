import { CommentService } from './../../services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig } from 'ng2-toasty';
import { Comment } from './../../models/comment';
import { Post } from './../../models/post';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.component.html'
})
export class CommentFormComponent implements OnInit {

    @Input() post: Post;
    
    comment: Comment = {
        id: 0,
        content: '',
        postid: 0,
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commentService: CommentService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() { 
        
    }

    submit(){
        this.comment.postid = this.post.id;
        this.commentService.create(this.comment)
            .subscribe(
                comment => {
                    this.toastyService.success({
                        title: 'Success',
                        msg: 'It was successfully created.',
                        theme: 'bootstrap',
                        showClose: true,
                        timeout: 5000
                    });
                },
                err => {
                    this.toastyService.error({
                        title: 'Error',
                        msg: 'An unexpected error happened.',
                        theme: 'bootstrap',
                        showClose: true,
                        timeout: 5000
                    });
                }
            );

            this.router.navigate(['/post/view/' + this.post.id])
    }
}