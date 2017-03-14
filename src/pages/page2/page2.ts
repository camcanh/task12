import { Page1 } from './../page1/page1';
import { Login } from './../../providers/login';
import { Component } from '@angular/core';
import { Nav} from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
    
  private user: any = {};

  logged: Boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: Login) {
    // If we navigated to this page, we will have an item available as a nav param
    

    // Let's populate this page with some filler content for funzies
  }

  ionViewWillEnter() {
    if (localStorage.getItem("user") !== null){
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.logged = true;
      
    } else if (this.loginService.getUser().password !== undefined){
      this.loginService.login();
    }
  }

  login = (value: any) => {
    //console.log(value);
    this.loginService.setUser(value);
    this.loginService.login().subscribe(
        resp => {
          const dataFromServer = resp;
          // save userdata to Local Storage
          this.user = dataFromServer.user;
          this.user.token = dataFromServer.token;
          console.log(this.user);
          localStorage.setItem("user", JSON.stringify(this.user));
          this.logged = true;
          this.navCtrl.setRoot(Page1);
          error => {
          console.log(error);
        }
        }
    );
        
  }
}
 
          