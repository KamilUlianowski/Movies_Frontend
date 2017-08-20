import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router } from '@angular/router'
import { User } from '../../users/details/user'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppSettings } from '../../app.settings'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    logged: boolean;
    user: User;
    constructor(private http: Http, private router: Router, private cookieService: CookieService) {
    }

    login(user: any): Observable<any> {
        return this.http.post('http://localhost:54500/api/login', user)
            .map(response => this.user = response.json() as User)
            .catch(this.handleError);

    }

    getUserData(login: string): Observable<any> {
        return this.http.get(AppSettings.API_URL + 'api/users/' + login)
            .map(response => response.json() as User)
            .catch(this.handleError);
    }

    isAuthenticated() {

        var login = this.cookieService.get('login')
        if (!!login) {
            // if (!!login) {
            //     if (this.user == null) {
            //         this.getUserData(login).subscribe(
            //             response => this.user = response
            //         );
            //     }
            // }
            this.user = new User(login);
        }
        if (!!this.user)
            return true;
        else return false;
    }

    logout() {
        this.user = null;
        this.cookieService.remove("isLogged");
        this.cookieService.remove("login");
        this.router.navigate(['/login'])
    }

    private extractData(res: Response) {
        let body = res.json().data;
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}