import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendpayPage } from './sendpay';

@NgModule({
  declarations: [
    SendpayPage,
  ],
  imports: [
    IonicPageModule.forChild(SendpayPage),
  ],
})
export class SendpayPageModule {}
