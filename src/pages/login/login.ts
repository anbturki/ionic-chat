import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPage (pageName: string) {
    pageName === 'InboxName' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
