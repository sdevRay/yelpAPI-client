import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  private _url: string = "/assets/data/businesses.json";

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<any[]>{
    // return this.http.get<any[]>(this._url)
    return this.http.get<any[]>("https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972")
    
    // A pipe takes in data as input and transforms it to a desired output. 
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
