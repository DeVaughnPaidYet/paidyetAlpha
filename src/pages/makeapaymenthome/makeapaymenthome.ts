import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {NavController, PopoverController} from "ionic-angular";
import {SendpayPage} from "../sendpay/sendpay";

/**
 * Generated class for the MakeapaymenthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makeapaymenthome',
  templateUrl: 'makeapaymenthome.html',
})
export class MakeapaymenthomePage {

  constructor(public nav: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeapaymenthomePage');
  }

  // go to send a payment
  doPay() {
    this.nav.push(SendpayPage);
  }

}
