import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact-form.component.html',
    styles: [`
        //.ng-invalid { border:1px solid red; }
    `]
})
export class ContactFormComponent {

    private user = {
        Username: 'mukesh',
        Email: 'mukeshdutt5@gmail.com',
        Comment: 'Welcome to goexamples',
        Gender: 'male'
    };

    genders = ['male', 'female']

    onSubmit(form: NgForm) {
        console.log(form.value);
    }
}