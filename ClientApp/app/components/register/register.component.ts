import { RegisterService } from './../../services/register.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    user: User = {
        id: 0,
        name: '',
        email: '',
        password: '',
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private RegisterService: RegisterService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() { }

    submit(){
        this.RegisterService.create(this.user)
            .subscribe(
                user => {
                    this.toastyService.success({
                        title: 'Success',
                        msg: user.email + ' was successfully created.',
                        theme: 'bootstrap',
                        showClose: true,
                        timeout: 5000
                    });
                },

                err => this.toastyService.error({
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