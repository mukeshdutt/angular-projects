import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AboutComponent } from './component/about/about.component'
import { NavbarComponent } from './component/navbar/navbar.component'

@NgModule({
    declarations: [AppComponent, NavbarComponent, AboutComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }