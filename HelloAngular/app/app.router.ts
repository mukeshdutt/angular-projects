import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home.component'
import { AboutComponent } from './components/pages/about.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const appRouteProviders = [
    RouterModule.forRoot(appRoutes)
];