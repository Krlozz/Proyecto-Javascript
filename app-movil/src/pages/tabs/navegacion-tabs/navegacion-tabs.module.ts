import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavegacionTabsPage } from './navegacion-tabs.page';
import { NavegacionTabsRoutingModule } from './navegacion-tabs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    NavegacionTabsRoutingModule
  ],
  declarations: [NavegacionTabsPage]
})
export class NavegacionTabsPageModule {}
