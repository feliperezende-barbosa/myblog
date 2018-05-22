import { RegisterService } from './services/register.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { DashboardService } from './services/dashboard.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';



import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        RegisterComponent,
        FooterComponent,
        HeaderComponent,
        SideBarComponent,
        LoginComponent,
        PostFormComponent,
        PostViewComponent,
        CommentFormComponent,
        CommentViewComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        ToastyModule.forRoot(),
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
            { path: 'post/create', component: PostFormComponent },
            { path: 'post/view/:id', component: PostViewComponent },
            { path: 'dashboard/:id', component: DashboardComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        RegisterService,
        PostService,
        CommentService,
        AuthService,
        DashboardService
    ]
})
export class AppModuleShared {
}
