import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class SpotifyService {

    baseUrl: string = 'https://api.spotify.com/v1/';
    accessToken: string = 'BQDy3HV-qWAXKMtXt6AzhL6TOBA7epnaC2ySgIIJmfJ8j2CWmXXaf6nQ48DaVLJ-O_a6CoR5XIUlgDCEdaljCvfpiaSmaYsIo6tszj2YQq6XkFBhwdgeV3_kWoNWvjzwONekceHTnf-awGUaWdgXAX8aKXb683o';

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
}