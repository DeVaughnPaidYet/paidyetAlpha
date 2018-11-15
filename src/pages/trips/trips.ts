import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {AlertController} from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import {SendpayPage} from "../sendpay/sendpay";


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController, public tripService: TripService, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
  
   
   // set sample data
    this.trips = tripService.getAll();
  }

  //send request alert
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Request Sent',
      subTitle: 'Card On File request successfully sent!',
      buttons: ['OK']
    });
    alert.present();
  } 

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

   // go to send a payment
   doPay() {
    this.nav.push(SendpayPage);
  }

  // go to populated send a payment
  doPayFilled() {
    this.nav.push(SendpayFilledPage);
  }
}
