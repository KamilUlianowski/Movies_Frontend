"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var login_service_1 = require("./shared/login.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, router, cookieService) {
        this.loginService = loginService;
        this.router = router;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.login();
    };
    // login() {
    //     this.loginService.login().subscribe(
    //         status =>
    //         { this.testtest = status; }
    //     );
    //     console.log(this.testtest);
    // }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.loginService.login(formValues).subscribe(function (result) { _this.nagivate(), _this.setCookie(result); }, function (error) { _this.loginFail(); });
    };
    LoginComponent.prototype.nagivate = function () {
        if (this.loginService.isAuthenticated()) {
            this.router.navigate(['/movies']);
        }
    };
    LoginComponent.prototype.setCookie = function (result) {
        this.cookieService.put("isLogged", "true");
        this.cookieService.put("login", result.login);
    };
    LoginComponent.prototype.loginFail = function () {
        if (!this.loginService.isAuthenticated()) {
            this.errors = "Provided credentials are not valid";
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-page',
        templateUrl: 'app/login/login.component.html'
    }),
    __param(0, core_1.Inject(login_service_1.LoginService)),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router, cookies_service_1.CookieService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map