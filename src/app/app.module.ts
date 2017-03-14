import { Comment } from './../providers/comment';
import { Favorite } from './../providers/favorite';
import { ShowingmediaPage } from './../pages/showmedia/showmedia';
import { ThumbnailPipe } from './../pipes/thumbnail';
import { Page2 } from './../pages/page2/page2';
import { Upload } from './../providers/upload';
import { Media } from './../providers/media';
import { Login } from './../providers/login';
import { UploadPage } from './../pages/upload/upload';
import { PagesRegisterPage } from './../pages/pages-register/pages-register';
import { LogoutPage } from './../pages/logout/logout';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LogoutPage,
    PagesRegisterPage,
    UploadPage,
    ThumbnailPipe,
    ShowingmediaPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LogoutPage,
    PagesRegisterPage,
    UploadPage,
    ShowingmediaPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Login, Media, Upload, ThumbnailPipe, Favorite, Comment]
})
export class AppModule {}
