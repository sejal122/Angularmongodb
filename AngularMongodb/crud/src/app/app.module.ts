import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlldataComponent } from './alldata/alldata.component';
import { RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import {routes} from './app-routing.module'
import { provideHttpClient } from '@angular/common/http';
import { EcomitemsComponent } from './ecomitems/ecomitems.component';
@NgModule({
  declarations: [
    AppComponent,
    AlldataComponent,
    EcomitemsComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [provideRouter(routes),provideHttpClient()],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class AppModule { }
