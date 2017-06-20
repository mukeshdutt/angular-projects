import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

@Injectable()
export class GithubService {

    username: string;
    
    constructor(private http: Http) {
        this.username = 'mukeshdutt';
    }

    GetUser() {
        return this.http.get('http://api.github.com/users/' + this.username);
    }

    GetRepos() {
        return this.http.get('http://api.github.com/users/' + this.username + '/repos');
    }

    UpdateUser(username: string) {
        this.username = username;
    }
}