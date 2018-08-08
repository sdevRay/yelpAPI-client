import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http"
import { Businesses } from "../model/businesses"

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  private url = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
  private _url: string = "/assets/data/businesses.json";

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<Businesses[]>{
    // return this.http.get<any[]>(this._url)
    return this.http.get<Businesses[]>(this.url)
    
    // A pipe takes in data as input and transforms it to a desired output. 
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
