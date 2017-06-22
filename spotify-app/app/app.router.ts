import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './component/about/about.component'
import { ContactComponent } from './component/about/contact.component'

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

export const appRouteProviders = [
    RouterModule.forRoot(appRoutes)
];