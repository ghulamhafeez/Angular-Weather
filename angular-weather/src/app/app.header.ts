import { Component } from '@angular/core';
import {WeatherService} from './weather.services'
import { Router } from '@angular/router';
@Component({
  selector: 'Header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  constructor(private service: WeatherService ,private router: Router) {}
  city: string = ''
  options: any = [];

  onInput(e:any){
    console.log("value" ,e.target.value);       
    this.city = e.target.value

    this.service.getAutoCompleteCity(e.target.value).subscribe((response) => {
      console.log('users', response);
      this.options = response;
    });

}

redirectToDetail ( option : any){
  console.log("option" ,option.Key);     
  this.router.navigate( [`weather-detail/${option.Key}`]);
}
}
