import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'

})
export class DataDrivenComponent {

    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl("mukeshdutt5", Validators.required),
                'email': new FormControl("mukeshdutt5@gmail.com", Validators.required)
            }),
            'password': new FormControl("", Validators.required)
        });
    }

    onSubmit() {
        console.log(this.myForm);
    }

}
