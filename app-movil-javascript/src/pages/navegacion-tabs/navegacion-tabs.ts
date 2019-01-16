import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navegacion-tabs',
  templateUrl: 'navegacion-tabs.html',
})
export class NavegacionTabsPage {

  homePage = 'HomePage'
  monitoreoPage = 'MonitoreoPage'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavegacionTabsPage');
  }

}
