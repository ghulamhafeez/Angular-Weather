import { Component } from '@angular/core';
import { WeatherService } from './weather.services';
// import { ActivatedRoute, Route } from '@angular/router'
@Component({
  selector: 'Detail',
  templateUrl: './app.detail.html',
  styleUrls: ['./app.detail.css']
})
export class AppDetail {
  constructor(private service: WeatherService 
    // ,private route: Route ,
    // private ActivatedRoute: Route
    ) {}

  // locationsForecast: any = this.service.getlocationsForecast();

  
    // ngOnInit() {

    // this.route.params.subscribe( params => console.log(params.id));
  //   this.route.paramMap.switchMap((params: ParamMap) => {
  //     let user_id = params.get('id');

  //     return this.userService.get(user_id);
  // })
  // }
}