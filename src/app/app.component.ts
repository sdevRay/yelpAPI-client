import { Component, OnInit } from '@angular/core';
import { YelpService } from './service/yelp.service';
import { Businesses } from "./model/businesses";

import { FormBuilder, FormGroup, Validators } from "@angular/forms"

export interface PricePoint {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pricePoints: PricePoint[] = [
    {value: 1, viewValue: "$"},
    {value: 2, viewValue: "$$"},
    {value: 3, viewValue: "$$$"},
    {value: 4, viewValue: "$$$$"}
  ];

  public selectedValue: string;
  public returnedData = [];
  public errorMsg;

  userForm: FormGroup;

  title = 'yelpAPI-client';

  constructor(private fb: FormBuilder, private yelpService: YelpService) { 

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      zipCode: [null,[
        Validators.required,
        Validators.min(5),
        Validators.max(5)
      ]],
      // pricePoint: ""
    });
    this.userForm.valueChanges.subscribe(console.log);
    console.log(this.selectedValue)
  }

  onSubmit(): void{
    // console.log(this.userForm.value.pricePoint);

    this.yelpService.getBusinesses(this.userForm.value.pricePoint, this.selectedValue)
    .subscribe(data => {
      this.returnedData = data.businesses
    },
      error => this.errorMsg = error);

  }

}


