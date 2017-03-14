import { Page1 } from './../page1/page1';
import { Login } from './../../providers/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: Login) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }
  ngOnInit() {
    localStorage.removeItem("user");
    this.loginService.logged = false;
    this.navCtrl.setRoot(Page1);

  }

}
