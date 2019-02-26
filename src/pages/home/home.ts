import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import {SendpayPage} from "../sendpay/sendpay";
import {MakeapaymenthomePage} from "../makeapaymenthome/makeapaymenthome";
import {LocalWeatherPage} from "../local-weather/local-weather";
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  constructor(
    private storage: Storage, 
    public nav: NavController, 
    public popoverCtrl: PopoverController,
    public alertController: AlertController) {
  }



  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

   // go to request page
   doRequest() {
    this.nav.push(LocalWeatherPage);
  }

  // go to reports page
  doReports() {
    this.nav.push(MakeapaymenthomePage);
  }

  // go to send a payment
  doPay() {
    this.nav.push(SendpayPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

 /* ionViewCanLeave(): Promise<void> {
    return new Promise((resolve, reject) => {
      let confirm = this.alertController.create({
        title: 'Are you sure?',
        message: 'Bunnies will die :(',
        buttons: [{
          text: 'OK',
          handler: () => {
            resolve();
          },
        }, {
          text: 'Cancel',
          handler: () => {
            reject();
          }
        }],
      });
      confirm.present();
    })
  } */


}

//
