import { Component } from '@angular/core';
import { YelpService } from './service/yelp.service';
import { Businesses } from "./model/businesses";

import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms"


// EXTRACT INTO ITS OWN MODEL
export interface PricePoint {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public userInputForm: FormGroup;

  pricePoints: PricePoint[] = [
    { value: 1, viewValue: "$" },
    { value: 2, viewValue: "$$" },
    { value: 3, viewValue: "$$$" },
    { value: 4, viewValue: "$$$$" }
  ];

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  public selectedOption: string;
  public returnedData = [];
  public displayData: Object;
  public errorMsg;
  public spinner: boolean = false;
  public showAll: boolean = false;
  public randomNumber: number;

  returnedAttempt: string;

  title = 'yelpAPI-client';

  constructor(private fb: FormBuilder, private yelpService: YelpService) {
    this.createForm();
  }

  createForm(): void {
    this.userInputForm = this.fb.group({
      pricePoint: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      state: new FormControl("", [Validators.required])
    });
  }

  onSubmit(): void {
    if(this.showAll){
      this.showAll = false;
    }
    this.spinner = true;
    this.yelpService.getBusinesses(this.userInputForm.value.pricePoint, this.userInputForm.value.city, this.userInputForm.value.state)
      .subscribe(data => { // TRY TO SHAPE DATA AS BUSINESS
        this.returnedAttempt = data;

        console.log(this.returnedAttempt);
        // this.returnedData = data.businesses;
        // this.randomNumber = this.randomNumberGenerator(this.returnedData.length);
        // this.displayData = this.returnedData[this.randomNumber];
        // this.spinner = false;
        // this.showAll = true;
      })
        // error => this.errorMsg = error);
  }

  onShowAll(){
    this.showAll = false;
  }

  randomNumberGenerator(randomNumber): number {
    return Math.floor((Math.random() * randomNumber) + 0);
  }

}


