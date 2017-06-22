import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

    search = { text: '' };
    records = ["mukesh", "rajesh", "alok"]

    SearchMusic() {
        console.log(this.search.text);
    }
}