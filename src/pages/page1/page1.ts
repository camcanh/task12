import { ShowingmediaPage } from './../showmedia/showmedia';
import { Media } from './../../providers/media';
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  private images: any = [];

  constructor(public navCtrl: NavController, private mediaService: Media, public navParams: NavParams) {
    
  }
  ngOnInit() {
    //if(!this.loginService.logged)
      //this.router.navigate(['login']);

    this.mediaService.getMedia().subscribe(
      res => {
        this.images = res;
      }
    );
  }
  setClickedMedia = (id) => {
    
    console.log(id);
    this.navCtrl.push(ShowingmediaPage,{
      id: id
    });
  }

}
