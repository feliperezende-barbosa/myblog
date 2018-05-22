import { User } from './../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
    selector: 'post-form',
    templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {

    post: Post = {

        id: 0,
        title: '',
        body: '',
        userid: 0,
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService,
        private ToastyService: ToastyService
    ) { }

    ngOnInit() { }

    submit(){
        this.postService.create(this.post)
            .subscribe(
                post => {
                    this.ToastyService.success({
                        title: 'Success',
                        msg: post.title + ' was successfully published.',
                        theme: 'bootstrap',
                        showClose: true,
                        timeout: 5000
                    });
                },

                err => this.ToastyService.error({
                    title: 'Error',
                    msg: 'An unexpected error happened.',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                })
            );

            this.router.navigate(['/home']);
    }
}