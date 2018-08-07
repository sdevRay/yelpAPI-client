import { Component, OnInit } from '@angular/core';
import { YelpService } from './yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public businesses = [];
  public errorMsg;

  title = 'yelpAPI-client';

  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    this.yelpService.getBusinesses()
      .subscribe(data => this.businesses = data,
                 error => this.errorMsg = error);
    console.log(this.businesses)
  }
}
