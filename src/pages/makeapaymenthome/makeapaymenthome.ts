import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {NavController, PopoverController} from "ionic-angular";
import {SendpayPage} from "../sendpay/sendpay";
import {SendpayFilledPage} from "../sendpay-filled/sendpay-filled";


/**
 * Generated class for the MakeapaymenthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


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
    // go to populated send a payment
    doFilled() {
      this.nav.push(SendpayFilledPage);
    }
}
