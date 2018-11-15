import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
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

  constructor(public nav: NavController, public tripService: TripService, public popoverCtrl: PopoverController) {
    // set sample data
    this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

   // go to send a payment
   doPay() {
    this.nav.push(SendpayPage);
  }
}
