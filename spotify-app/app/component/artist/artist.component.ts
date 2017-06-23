import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.services'

import { Artist } from '../../model/artist'

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

    id: string;
    artist: any;
    albums: any;

    constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

    ngOnInit() {

        this.route.params.subscribe(params => {

            this.id = params["id"];

            // getting artist information
            this.spotifyService.getArtist(this.id).subscribe(res => {
                this.artist = res.json();
            });

            // getting all albums
            this.spotifyService.getAlbums(this.id).subscribe(res => {
                this.albums = res.json().items;
            });
        });
    }
}