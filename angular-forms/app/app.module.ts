import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ContactFormComponent } from './component/template-driven/contact-form.component'
import { DataDrivenComponent } from './component/data-driven/data-driven.component'

@NgModule({
    declarations: [AppComponent, ContactFormComponent, DataDrivenComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}