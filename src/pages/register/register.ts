import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPage (pageName: string) {
    pageName === 'InboxName' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
