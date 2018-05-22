import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'post-view',
    templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
    
    post: Post;
    postId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService
    ) { 
        route.params.subscribe(p => {
            this.postId = +p['id'];
            if (isNaN(this.postId) || this.postId <= 0) {
                router.navigate(['/home']);
                return; 
              }
        });
    }

    ngOnInit() {
        this.postService.getPost(this.postId)
            .subscribe(
                post => this.post = post,
                err => {
                    if (err.status == 404) {
                        this.router.navigate(['/home']);
                        return; 
                    }
                }
            );
     }
}