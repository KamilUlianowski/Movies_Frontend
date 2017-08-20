import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class Authentication implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate() {
    if (this.loginService.isAuthenticated())
      return true;
      
    this.router.navigate(['/login'])
    return false;
  }
}