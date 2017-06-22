import { Component } from '@angular/core'

@Component({
    selector: 'contact',
    template: `
        <div>Name : {{name}}</div>
        <div>Mobile : {{mobile}}</div>
        <div>Email : {{email}}</div>
        <div>Address : {{address}}</div>
    `,
    styles: []
})
export class ContactComponent { 

    name:string = 'mukesh dutt'
    mobile:string = '+91-9717915661'
    email:string = 'mukeshdutt5@gmail.com'
    address:string = 'Plot 94, sector 32, Gurgaon, Haryana, India'
}