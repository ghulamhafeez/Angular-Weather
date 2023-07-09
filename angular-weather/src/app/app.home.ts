import { Component } from '@angular/core';
import {popularCities} from '../constant/Constants'
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css'],

})
export class Home {
  PopularCities = popularCities
}
