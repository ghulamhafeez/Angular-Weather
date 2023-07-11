import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

//   getUsers() {
//     return this.httpClient.get(this.url);
//   }
}