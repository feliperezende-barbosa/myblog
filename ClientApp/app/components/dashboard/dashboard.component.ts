import { DashboardService } from './../../services/dashboard.service';
import { User, UserResource } from './../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    userResource: UserResource;
    email: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dashboardService: DashboardService
    ) {
        route.params.subscribe(p => {
            this.email = p.id;
        })
    }

    ngOnInit() {
        this.dashboardService.getUser(this.email)
            .subscribe(
                user => this.userResource = user
            );
        
     }
}