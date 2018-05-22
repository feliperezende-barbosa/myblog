import { User } from './../models/user';
import { Post } from './../models/post';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    getPosts(){
        return this.http.get('/api/post')
            .map(res => res.json() as Post[]);
    }

    create(post: Post){

        return this.http.post('/api/post', post)
            .map(res => res.json());
    }

    getPost(id: number){
        return this.http.get('/api/post/' + id)
            .map(res => res.json() as Post);
    }
}