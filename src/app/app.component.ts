import { Component, Inject } from '@angular/core';
import { LoginService } from './login/shared/login.service' 

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    constructor( @Inject(LoginService) private loginService: LoginService) {
    }
   name = 'Angular'; }
