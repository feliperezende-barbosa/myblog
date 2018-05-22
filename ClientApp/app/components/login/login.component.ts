import { Component, OnInit } from '@angular/core';
import { User, UserResource } from './../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig } from 'ng2-toasty';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    user: User = {
        id: 0,
        name: '',
        email: '',
        password: '',
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() { }

    submit(){
        this.authService.auth(this.user)
            .subscribe(
                user => {
                    this.toastyService.success({
                        title: 'Success',
                        msg: user.name + ' Welcome.',
                        theme: 'bootstrap',
                        showClose: true,
                        timeout: 5000
                    });
                    this.router.navigate(['/dashboard/' + user.email]);
                },

                err => {
                    if (err.status == 404){
                        this.toastyService.error({
                            title: 'Error',
                            msg: 'An unexpected error happened.',
                            theme: 'bootstrap',
                            showClose: true,
                            timeout: 5000
                        });
                        this.router.navigate(['/login']);
                        return;
                    }

                }

            );

            
    }
}