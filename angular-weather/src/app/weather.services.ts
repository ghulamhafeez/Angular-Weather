import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = 'http://dataservice.accuweather.com/';
   apiKey = "w74RorP4hf7wdUwIUlKNPhRxIa4fEVjW";
   



  constructor(private httpClient: HttpClient) {}

  // getlocationsForecast() {
  //   return this.httpClient.get(`${this.url} + locations/v1/${id}?apikey=${this.apiKey}`);
  // }
  
  getAutoCompleteCity (query:string){
    return this.httpClient.get(`${this.url}locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${query}`);
  }
  getHourlyForecast (id:number){
    return this.httpClient.get(`${this.url}forecasts/v1/hourly/12hour/${id}?apikey=${this.apiKey}`)
  }
} 