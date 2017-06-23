import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SpotifyService } from '../../services/spotify.services'

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

    id: string;
    album: any;

    constructor(private spotifyService: SpotifyService, private router: ActivatedRoute) { }

    ngOnInit() {

        this.router.params.subscribe(params => {

            this.id = params['id'];
            this.spotifyService.getAlbumsDetails(this.id).subscribe(res => {
                this.album = res.json();

                console.log(this.album);
            });
        });
    }
}