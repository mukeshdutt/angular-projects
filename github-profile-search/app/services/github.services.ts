import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

@Injectable()
export class GithubService {

    private username: string;
    private clientId: string = "38d394802feeaf5a703f";
    private clientSecret = "07e0122e97cf6d17fb38c4ca6caad447a00c1cf0";

    constructor(private http: Http) {
        this.username = 'mukeshdutt';
    }

    GetUser() {
        return this.http.get('http://api.github.com/users/' + this.username + "?client_id=" + this.clientId + '&client_secret=' + this.clientSecret);
    }

    GetRepos() {
        return this.http.get('http://api.github.com/users/' + this.username + '/repos' + "?client_id=" + this.clientId + '&client_secret=' + this.clientSecret);
    }

    UpdateUser(username: string) {
        this.username = username;
    }
}