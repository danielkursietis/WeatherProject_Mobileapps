import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gweather',
  templateUrl: './gweather.page.html',
  styleUrls: ['./gweather.page.scss'],
})
export class GweatherPage {
  searchTerm: string;
  weatherData: any;

  constructor(private http: HttpClient) {
    this.searchTerm = '';
  }
 // get api data
  searchCountry(event: any) {
    const apiKey = "9accefa47d2146fa8ca164746231005";
    const searchTerm = event.target.value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchTerm}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}
