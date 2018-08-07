import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { KeyInterceptorService } from "../app/interceptor/key.interceptor.service"

import { YelpService } from './yelp.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YelpService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: KeyInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
