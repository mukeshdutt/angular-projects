import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { GithubService } from './services/github.services'

import { AppComponent } from './app.component'
import { ProfileComponent } from './component/profile.component'

@NgModule({
    declarations: [AppComponent, ProfileComponent],
    imports: [BrowserModule, HttpModule, FormsModule],
    bootstrap: [AppComponent],
    providers: [GithubService]
})
export class AppModule { }