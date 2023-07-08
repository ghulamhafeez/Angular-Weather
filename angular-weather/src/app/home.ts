import { Component } from '@angular/core';
import {popularCities} from '../constant/Constants'
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./app.component.css'],

})
export class Home {
  PopularCities = popularCities
}
