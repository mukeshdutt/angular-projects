import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

    private projectName: string;
    private tab1:string;
    private tab2:string;

    constructor() {
        this.projectName = 'Go Examples';
        this.tab1 = "Alien";
        this.tab2 = "Humen";
    }
}