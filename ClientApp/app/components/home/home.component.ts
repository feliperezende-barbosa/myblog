import { User } from './../../models/user';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/forkJoin';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    post: Post[];
    user: User[];

    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) {}

    ngOnInit() {

        this.postService.getPosts()
            .subscribe(post => this.post = post);
        
    }

}
