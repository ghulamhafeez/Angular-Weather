import { Component } from '@angular/core';
import { WeatherService } from './weather.services';
import { ActivatedRoute, Route } from '@angular/router'
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'Detail',
  templateUrl: './app.detail.html',
  styleUrls: ['./app.detail.css']
})
export class AppDetail {
  constructor(private service: WeatherService ,
    // ,private route: Route ,
    private route: ActivatedRoute
    ) {}

  // locationsForecast: any = this.service.getlocationsForecast();

  
    ngOnInit() {

    this.route.params.subscribe( params => console.log(params, "parm"));

  //   this.route.paramMap.switchMap((params: any) => {
  //     let user_id = params.get('id');
  //     console.log(params, "parm")
  //     // return this.userService.get(user_id);
  // })
  }
}