import { Component } from '@angular/core'
import { GithubService } from '../services/github.services'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    user = {};
    repos: any;
    profile = { username: '' };

    constructor(private githubService: GithubService) {

        this.user = false;
    }

    GetDetails() {

        this.githubService.UpdateUser(this.profile.username);

        this.githubService.GetUser().subscribe(user => {
            this.user = user.json();
        });

        this.githubService.GetRepos().subscribe(repos => {
            this.repos = repos.json();
        });
    }
}
