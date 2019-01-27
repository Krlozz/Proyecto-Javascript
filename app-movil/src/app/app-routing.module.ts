import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'src/pages/login/login.module#LoginPageModule' },
  { path: 'navegacion', loadChildren: 'src/pages/tabs/navegacion-tabs/navegacion-tabs.module#NavegacionTabsPageModule'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
