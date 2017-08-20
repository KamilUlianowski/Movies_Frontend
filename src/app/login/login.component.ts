import { LoginService } from './shared/login.service'
import { Component, Inject, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from '../users/details/user'
import { CommonModule } from '@angular/common';
@Component({
    selector: 'login-page',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {

    errors : string;
    constructor( @Inject(LoginService) private loginService: LoginService, 
     private router: Router, private cookieService: CookieService) {
    }


    ngOnInit(): void {
        // this.login();
    }

    // login() {
    //     this.loginService.login().subscribe(
    //         status =>
    //         { this.testtest = status; }
    //     );
    //     console.log(this.testtest);
    // }

    login(formValues: any) {
        this.loginService.login(formValues).subscribe(
            (result) => { this.nagivate(), this.setCookie(result) },
            (error) => {this.loginFail() }
        );
    }


    nagivate() {

        if (this.loginService.isAuthenticated()) {
            this.router.navigate(['/movies'])
        }
    }

    setCookie(result: User){
        this.cookieService.put("isLogged", "true")
        this.cookieService.put("login", result.login)
    }


    loginFail(){
         if (!this.loginService.isAuthenticated()) {
            this.errors = "Provided credentials are not valid";
        }
    }

}
