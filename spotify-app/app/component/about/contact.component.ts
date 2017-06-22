import { Component } from '@angular/core'

@Component({
    selector: 'contact',
    template: `
        <div class="col-md-8 col-md-offset-2"> 
            <h2>Contact Infomation</h2> <br />
            <p>Name : {{name}}</p>
            <p>Mobile : {{mobile}}</p>
            <p>Email : {{email}}</p>
            <p>Address : {{address}}</p>
        </div>
    `,
    styles: []
})
export class ContactComponent {

    name: string = 'mukesh dutt'
    mobile: string = '+91-9717915661'
    email: string = 'mukeshdutt5@gmail.com'
    address: string = 'Plot 94, sector 32, Gurgaon, Haryana, India'
}