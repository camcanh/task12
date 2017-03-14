import { Page1 } from './../pages/page1/page1';
import { NavController } from 'ionic-angular';
import { Login } from './login';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Upload provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Upload {
  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token = '';
  constructor(private http: Http, private loginService: Login) {
    this.token = this.loginService.getUser().token;
    console.log(this.token = this.loginService.getUser().token
);
   }
   uploadMedia = (formContent: any)=> {
    console.log(this.token);
    
    return this.http.post(this.url + '/media?token=' + this.token, formContent)
      .map(
        res => {
          res.json();
         
        }
          
          
      );
  }
  
  


}
