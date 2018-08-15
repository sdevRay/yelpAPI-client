import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http"
import { YelpService } from './service/yelp.service';

import { FlexLayoutModule } from "@angular/flex-layout"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule, MatGridListModule, MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule } from "@angular/material";


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
    MatGridListModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
