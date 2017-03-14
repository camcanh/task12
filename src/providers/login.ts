
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';


/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Login {
 


  logged: Boolean = false;

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  constructor(private http: Http) { }

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  };

  getUser = () => {
    return this.user;
  }

  login = () => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url+'/login', this.user)
      .map(
        (resp: Response) => resp.json()      
        
      );
  };

  register = () => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url+'/users', this.user).map((resp: Response) => resp.json());
      
  };

  logout = () => {
    localStorage.removeItem("user");
    this.logged = false;
  };


}
