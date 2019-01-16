import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPageModule } from '../pages/login/login.module'

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { MonitoreoPageModule } from '../pages/monitoreo/monitoreo.module';
import { NavegacionTabsPageModule } from '../pages/navegacion-tabs/navegacion-tabs.module';


@NgModule({
  declarations: [    
    MyApp
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HomePageModule,
    MonitoreoPageModule,
    NavegacionTabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
