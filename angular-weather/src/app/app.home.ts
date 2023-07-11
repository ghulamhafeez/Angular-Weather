import { Component } from '@angular/core';
import {popularCities} from '../constant/Constants'
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css'],

})
export class Home {
  PopularCities = popularCities
  constructor(private router: Router) {}

  redirectToDetail(x:any): void {
    console.log("called",x)
    this.router.navigate( [`weather-detail/${x.key}`]);
  }

}


