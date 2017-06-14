import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

var plateform = platformBrowserDynamic();
plateform.bootstrapModule(AppModule)