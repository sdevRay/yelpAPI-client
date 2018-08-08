import { Component, OnInit } from '@angular/core';
import { YelpService } from './service/yelp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
