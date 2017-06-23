import { Component } from '@angular/core'

import { SpotifyService } from '../../services/spotify.services'
import { Artist } from '../../model/artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

    // Local Properties
    search = { text: '' };
    searchResult: Artist[];

    // Constructor
    constructor(private spotifyService: SpotifyService) { }

    // Methods
    searchMusic() {

        if (this.search.text) {
            let result = this.spotifyService.getMusics(this.search.text).subscribe(
                res => {
                    let data = res.json();
                    this.searchResult = data.artists.items;
                }
            );
        }
    }
}