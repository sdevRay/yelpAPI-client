import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { KeyInterceptorService } from "./interceptor/key.interceptor.service"

import { YelpService } from './service/yelp.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule, MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule } from "@angular/material";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  providers: [YelpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeyInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
