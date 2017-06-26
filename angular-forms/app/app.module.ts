import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { ContactFormComponent } from './component/template-driven/contact-form.component'

@NgModule({
    declarations: [AppComponent, ContactFormComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}