
import { Component } from '@angular/core';
import {NavController, PopoverController} from "ionic-angular";
import { WeatherProvider } from '../../services/weather';
import { Storage } from '@ionic/storage';
import {SendpayFilledPage} from "../sendpay-filled/sendpay-filled";
import { IonicPage, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


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
  ]

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertController: AlertController,
    private weatherProvider: WeatherProvider,
    private storage: Storage,
  
    ) {

    
  }

  // go to populated send a payment
doFilled() {
  this.nav.push(SendpayFilledPage);
}
 
async presentAlert() {
  const alert = await this.alertController.create({
    message: 'Card-On-File Request Sent.',
    buttons: ['OK']
  });

  await alert.present();
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
