import { User } from './../models/user';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    auth(user: User){
        return this.http.post('/api/auth', user)
            .map(res => res.json());
    }
}