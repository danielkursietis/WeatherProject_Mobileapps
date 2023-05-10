import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  forecastData: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.getForecast();
  }
  // get api data
  getForecast() {
    const apiKey = "9accefa47d2146fa8ca164746231005";
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.lat},${this.long}&days=7`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.forecastData = data;
      console.log(this.forecastData);
    });
  }
}