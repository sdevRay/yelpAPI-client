import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Businesses } from '../model/businesses';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  private corsURL = "https://cors-anywhere.herokuapp.com/";
  private baseURL = "https://api.yelp.com/v3/businesses";
  private _url: string = "/assets/data/businesses.json";

  private serverURL = "https://yelpapi-client.herokuapp.com";
  private localURL = "http://localhost:4200"

  constructor(private http: HttpClient) { }

  getBusinesses(pricePoint, city, state): Observable<any> { // TRY TO SHAPE DATA AS BUSINESS
    // return this.http.get(`${this.baseURL}/search?locale=en_US&limit=50&price=${pricePoint}&location=${city},${state}`);
    return this.http.get(`${this.serverURL}/api`);
    // return this.http.get(`${this.serverURL}/api`);
  }
}

