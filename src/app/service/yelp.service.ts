import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Businesses } from '../model/businesses';


@Injectable({
  providedIn: 'root'
})
export class YelpService {

  private corsURL = "https://cors-anywhere.herokuapp.com/"
  // private baseURL = "https://api.yelp.com/v3/businesses/search?term=delis&location=47362";
  private baseURL = "https://api.yelp.com/v3/businesses/search?term=1&location=47362";
  private _url: string = "/assets/data/businesses.json";

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<any> {
    // return this.http.get<Businesses[]>(this._url)
    return this.http.get(this.corsURL + this.baseURL)
  }
}
