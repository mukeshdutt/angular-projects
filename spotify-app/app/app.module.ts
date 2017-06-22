//  call angular modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// calling components
import { AppComponent } from './app.component'
import { AboutComponent } from './component/about/about.component'
import { ContactComponent } from './component/about/contact.component'
import { NavbarComponent } from './component/navbar/navbar.component'
import { SearchComponent } from './component/search/search.component'

// Calling services
import { SpotifyService } from './services/spotify.services'

// calling routing
import { appRouteProviders } from './app.router'

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        ContactComponent,
        SearchComponent
    ],

    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        appRouteProviders
    ],

    bootstrap: [AppComponent],
    providers: [SpotifyService]
})
export class AppModule { }