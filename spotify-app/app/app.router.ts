import { RouterModule, Routes } from '@angular/router'

import { SearchComponent } from './component/search/search.component'
import { AboutComponent } from './component/about/about.component'
import { ContactComponent } from './component/about/contact.component'
import { ArtistComponent } from './component/artist/artist.component'
import { AlbumComponent } from './component/album/album.component'

const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent }
];

export const appRouteProviders = [
    RouterModule.forRoot(appRoutes)
];