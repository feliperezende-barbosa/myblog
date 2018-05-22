import { Post } from './../models/post';
import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

    constructor(private http: Http){}

    create(comment: Comment){
        return this.http.post('/api/comment', comment)
            .map(res => res.json());
    }

    getComments(id: number){
        return this.http.get('/api/comment/' + id)
            .map(res => res.json() as Comment[]);
    }

}