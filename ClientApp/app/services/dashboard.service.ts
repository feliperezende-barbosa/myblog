import { User, UserResource } from './../models/user';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class DashboardService {

    constructor(private http: Http) {}

    getUser(email: string){
        return this.http.get('/api/user/' + email)
            .map(res => res.json() as UserResource);
    }

}