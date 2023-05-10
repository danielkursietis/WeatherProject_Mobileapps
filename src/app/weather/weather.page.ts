import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  weatherData: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.getWeather();
  }
  // get api data
  getWeather() {
    const apiKey = "9accefa47d2146fa8ca164746231005";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.lat},${this.long}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
