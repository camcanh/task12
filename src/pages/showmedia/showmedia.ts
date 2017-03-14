import { Page2 } from './../page2/page2';
import { Favorite } from './../../providers/favorite';
import { Login } from './../../providers/login';
import { ThumbnailPipe } from './../../pipes/thumbnail';
import { Media } from './../../providers/media';
import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { NavigationEnd } from '@angular/router';

/*
  Generated class for the Showmedia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-showmedia',
  templateUrl: 'showmedia.html'
})
export class ShowingmediaPage {
  private id: number;
  private clickedMedia: any = {};
  private favouriteList: any = [];

  private hasLiked: boolean = false;
  
  constructor(public navParams: NavParams, private mediaService: Media, private thumbnailpipe: ThumbnailPipe, private loginService: Login, private favoriteService: Favorite, private navCtrl: NavController, private nav: Nav  ) {
    this.id = this.navParams.get('id');
    
  }

  ionViewDidLoad() {
    

    this.mediaService.getMediaById(this.id)
      .subscribe(
      res => {
        this.clickedMedia = res;
        this.mediaService.getUserById(this.clickedMedia.user_id)
          .subscribe(
          resp => {
            this.clickedMedia.username = resp.username;
          });
        console.log(this.clickedMedia);
      });

    this.favoriteService.getFavouriteByFile(this.id)
      .subscribe(
      res => {
        this.favouriteList = res;
        console.log(this.favouriteList);
        for (let favourite of this.favouriteList) {
          if (this.loginService.getUser().user_id === favourite.user_id) {
            this.hasLiked = true;
          }
        }
      });
  }

  setlike = () => {   
    if (!this.hasLiked) {
      let param: any = {};
      param.file_id = +this.id;
      this.favoriteService.createFavorite(param)
        .subscribe(res => {
          this.hasLiked = !this.hasLiked;
        });
    } else {
      this.favoriteService.deleteFavorite(this.id)
        .subscribe(res => {
          this.hasLiked = !this.hasLiked;
        });
    }

  }

  
  

}
