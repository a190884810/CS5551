import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { MorePage } from '../pages/more/more';
import { NotificationPage } from '../pages/notification/notification';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    DiscoveryPage,
    MorePage,
    NotificationPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot() //ionicStorage 的特殊处理 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    DiscoveryPage,
    MorePage,
    NotificationPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ],

  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
  // CUSTOM_ELEMENTS_SCHEMA
})
export class AppModule {}
