//  call angular modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

// calling components
import { AppComponent } from './app.component'
import { AboutComponent } from './component/about/about.component'
import { NavbarComponent } from './component/navbar/navbar.component'

// Calling services
import { SpotifyService } from './services/spotify.services'

@NgModule({
    declarations: [AppComponent, NavbarComponent, AboutComponent],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule],
    bootstrap: [AppComponent],
    providers: [SpotifyService]
})
export class AppModule { }