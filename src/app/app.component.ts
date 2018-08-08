import { Component, OnInit } from '@angular/core';
import { YelpService } from './service/yelp.service';
import { Businesses } from "./model/businesses"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public Businesses = [];
  public returnedData = [];
  public errorMsg;

  title = 'yelpAPI-client';

  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    this.yelpService.getBusinesses()
      .subscribe(data => {
      this.returnedData = data
      console.log(this.returnedData)
      },
        error => this.errorMsg = error);
  }
}
