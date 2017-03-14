import { Login } from './login';
import { Media } from './media';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Favorite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Favorite {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: string = '';

  constructor(
    private http: Http,
    private mediaService: Media,
    
    private loginService: Login
  ) {
    
   }

  getFavouriteByFile = (id: number) => {
    return this.http.get(this.url + '/favourites/file/' + id)
      .map(
      res =>
        res.json()
      );
  }

  createFavorite = (id: any) => {
    this.token = this.loginService.getUser().token;
    return this.http.post(this.url + '/favourites?token=' + this.token, id)
      .map(
      res => {
        res.json();
      });
  }

  deleteFavorite = (id: any) => {
    this.token = this.loginService.getUser().token;
    return this.http.delete(this.url + '/favourites/file/' + id + '?token=' + this.token)
      .map(
      res => {
        res.json();
      });
  }

}
