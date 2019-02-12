
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { Storage } from '@ionic/storage';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
  weather: any;
  location: {
    state: string,
    city: string
  }

  public locationList: Array<any> = [
    {city: 'John Doe', state: '4564'},
    {city: 'Jane Doe', state: '7879'},
    {city: 'Mitch Conoly', state: '6132'},
    {city: 'Dave Sorino', state: '0003'}
  ]

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage,
    ) {

    
  }

 

  ionViewWillEnter() {

    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);

      } else {
        this.location = {
          state: 'CA',
          city: 'Los Angeles'
        }
      }

      this.getWeather(this.location)

    });

  }

  public getWeather(location) {
    if (typeof location === 'string') {
      this.location = JSON.parse(location);
      console.log(this.location);
    } else {
      this.location = location;
    }

    this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe((weather: any) => {
      this.weather = weather.current_observation;
    });
  }

}
