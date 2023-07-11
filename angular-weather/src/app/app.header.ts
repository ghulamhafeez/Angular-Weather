import { Component } from '@angular/core';
import {WeatherService} from './weather.services'

@Component({
  selector: 'Header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  constructor(private service: WeatherService) {}
  city: string = 'multan'
  autocomplete: {} = []


  ngOnInit() {
    this.service.getAutoCompleteCity(this.city).subscribe((response) => {
      console.log('users', response);
      this.autocomplete = response;
    });

    console.log('autocomplete', this.autocomplete);
      console.log('city', this.city);
  }


}
