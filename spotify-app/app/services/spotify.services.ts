import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class SpotifyService {

    baseUrl: string = 'https://api.spotify.com/v1/';
    accessToken: string = 'BQCZrz9-TqzP7sqfgFM9lgUXjoUkRySE_W3kIs5sXB5EkbK-VUVvVnTyRIeq81eSx2t1X_83Tl4SenkbOZlURCiSB9kIiDhYcQqTPAlncX6_P56TrlO9M2Lcb5bnM7q5p0R8nb_9T4suD8mHlRvDU6IW1a49Esc';

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
}