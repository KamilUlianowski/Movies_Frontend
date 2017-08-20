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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var user_1 = require("../../users/details/user");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var app_settings_1 = require("../../app.settings");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LoginService = (function () {
    function LoginService(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('http://localhost:54500/api/login', user)
            .map(function (response) { return _this.user = response.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.getUserData = function (login) {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/users/' + login)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.isAuthenticated = function () {
        var login = this.cookieService.get('login');
        if (!!login) {
            // if (!!login) {
            //     if (this.user == null) {
            //         this.getUserData(login).subscribe(
            //             response => this.user = response
            //         );
            //     }
            // }
            this.user = new user_1.User(login);
        }
        if (!!this.user)
            return true;
        else
            return false;
    };
    LoginService.prototype.logout = function () {
        this.user = null;
        this.cookieService.remove("isLogged");
        this.cookieService.remove("login");
        this.router.navigate(['/login']);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json().data;
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, cookies_service_1.CookieService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map