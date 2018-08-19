import { Component } from '@angular/core';
import { YelpService } from './service/yelp.service';
import { Business } from "./model/business.model";
import { PricePoint } from "./model/pricepoint.model";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public pricePoints: PricePoint[] = [
    { value: 1, viewValue: "$" },
    { value: 2, viewValue: "$$" },
    { value: 3, viewValue: "$$$" },
    { value: 4, viewValue: "$$$$" }
  ];
  
  public states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  public userInputForm: FormGroup;
  public selectedOption: Business;
  public returnedData: Business[];
  public errorMsg: string;
  public spinner: boolean;

  constructor(private fb: FormBuilder, private yelpService: YelpService) {
    this.createForm();
  }

  private createForm(): void {
    this.userInputForm = this.fb.group({
      pricePoint: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      state: new FormControl("", [Validators.required])
    });
  }

  public onSubmit(): void {
    this.spinner = true;
    this.yelpService.getBusinesses(this.userInputForm.value.pricePoint, this.userInputForm.value.city, this.userInputForm.value.state)
      .subscribe((data: Business[]) => {
        this.returnedData = data;
        this.selectedOption = this.returnedData[this.randomNumberGenerator(this.returnedData.length)];
        this.spinner = false;
      }, err => this.errorMsg = err)
  }

  private randomNumberGenerator(randomNumber): number {
    return Math.floor((Math.random() * randomNumber) + 0);
  }

}


