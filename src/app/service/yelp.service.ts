import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../model/business.model';

@Injectable({
  providedIn: 'root'
})

export class YelpService {

  private serverURL = "https://rch-yelpapi-client.herokuapp.com";
  private localURL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getBusinesses(pricePoint, city, state): Observable<Business[]> { 
    let cityState = `${city},${state}`;
    return this.http.get<Business[]>(`${this.localURL}/yelp/${pricePoint}/${cityState}`)
  }
}

