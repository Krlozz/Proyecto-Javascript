import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavegacionTabsPage } from './navegacion-tabs';

@NgModule({
  declarations: [
    NavegacionTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavegacionTabsPage),
  ],
})
export class NavegacionTabsPageModule {}
