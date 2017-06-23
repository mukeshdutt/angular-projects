import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class SpotifyService {

    baseUrl: string = 'https://api.spotify.com/v1/';
    accessToken: string = 'BQB1NaVGD4xlSV9QiAhxow_Y95oRG32ixsFGq97CvQrk9mlNPoJHbnTWLfT67FsEcx-iWzXkZM4VUoFrwbBwnTv4B0Pzwd1OPYgoLOr91AvzvWGGxTNijJWjwmuxYIrvByJUPxctu0Ac5LdiMURor7L-md2YUac';

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.accessToken);
    }

    getMusics(text: string) {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl + 'search?q=' + text + '&offset=0&limit=20&type=artist&market=US',
            {
                headers: headers
            }
        );
    }

    getArtist(id: string) {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl + "artists/" + id,
            {
                headers: headers
            }
        );
    }
    
    getAlbums(id: string) {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl + "artists/" + id + '/albums',
            {
                headers: headers
            }
        );
    }
    
    getAlbumsDetails(id: string) {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.baseUrl + "albums/" + id,
            {
                headers: headers
            }
        );
    }
}