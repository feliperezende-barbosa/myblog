import { Http } from '@angular/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

    constructor(private http: Http) {}

    create(user: User){

        return this.http.post('/api/register', user)
            .map(res => res.json());
    }
}