import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import { catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class YelpService {



  private yelpKey = "Wa29AFf1zWalIPDVYUkN3eRIvg9ztpotJVoM0MzTJ8jgdNy-5SY00xsn5dTRQsV854NU4o8kd0G0Hhktu63dFtOoMYdQW6eEZzHFxbyuzhJyJ4seUm9hIaMFLW9oW3Yx";
  private _url: string = "/assets/data/businesses.json";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + this.yelpKey
    })  
  };

  getBusinesses(): Observable<any[]>{
    // return this.http.get<any[]>(this._url)
    return this.http.get<any[]>("https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972", this.httpOptions)
    
    // A pipe takes in data as input and transforms it to a desired output. 
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
