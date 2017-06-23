import { Component } from '@angular/core'

@Component({
    selector: 'about',
    template: `
        <div class="col-md-8 col-md-offset-2"> 
            <h2>About ng2Spotify</h2>
            <h3>Version 1.0</h3>
            <p>This is an angular 2 app that uses the spotify web api to find artists and display albums and track listing.</p>          
        </div>
    `,
    styles: [``]
})
export class AboutComponent { }