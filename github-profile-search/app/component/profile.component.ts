import { Component } from '@angular/core'
import { GithubService } from '../services/github.services'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    user = {};
    repos = {};
    profile = { username: '' };

    constructor(private githubService: GithubService) {

        this.githubService.GetUser().subscribe(user => {
            this.user = user.json();
            console.log(this.user);
        });

        this.githubService.GetRepos().subscribe(repos => {
            this.repos = repos;
            console.log(this.repos);
        });
    }
}
