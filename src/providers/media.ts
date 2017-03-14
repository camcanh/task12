import { Login } from './login';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Media provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Media {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private limit: number = 10;
  private token: string ='';

  constructor(private http: Http, private loginService: Login) {
        this.token = this.loginService.getUser().token;

  }

  getMedia = () => {
    return this.http.get(this.url + '/media?limit=' + this.limit)
      .map(
        res =>
          res.json()
      );
  }

  getMediaById = (id: number) => {
    return this.http.get(this.url + '/media/' + id).map (
      res => res.json()
    );
  }

  getUserById = (id : number) => {
    this.token = this.loginService.getUser().token;
    return this.http.get(this.url + '/user/' + id + '?token=' + this.token).map(
      res => res.json()
    );
  }


}
