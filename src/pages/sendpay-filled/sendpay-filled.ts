import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SendpayFilledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendpay-filled',
  templateUrl: 'sendpay-filled.html',
})
export class SendpayFilledPage {

  constructor(
    public navCtrl: NavController,
    public nav: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendpayFilledPage');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Charge successful.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
