import { Page1 } from './../page1/page1';
import { Login } from './../../providers/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav} from 'ionic-angular';

/*
  Generated class for the PagesRegister page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pages-register',
  templateUrl: 'pages-register.html'
})
export class PagesRegisterPage {
      @ViewChild(Nav) nav: Nav;

      private user: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: Login) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesRegisterPage');
  }
  register = (value: any) => {
    //console.log(value);
    this.loginService.setUser(value);
    this.loginService.register().subscribe(
        resp => {
          this.user.user_id = resp.json().user_id;
          console.log(this.user);
          this.navCtrl.setRoot(Page1);
        },
        error => {
          console.log(error);
        }
      );;
  }

}
