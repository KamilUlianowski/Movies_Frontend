export class User{

    id: string;
    login: string;
    password: string;
    first_name: string;
    last_name: string;
    rated: any;
    is_admin: boolean;
    movieToWatch: any[];

        constructor(login: string) {
        this.login = login;
    }
}