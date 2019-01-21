import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavegacionPageModule } from '../pages/navegacion/navegacion.module';
import { NavegacionPage } from '../pages/navegacion/navegacion';
import { LoginPageModule } from '../pages/login/login.module';


@NgModule({
  declarations: [
    MyApp,
    NavegacionPage
  ],
  imports: [
    BrowserModule,
    // NavegacionPageModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NavegacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
