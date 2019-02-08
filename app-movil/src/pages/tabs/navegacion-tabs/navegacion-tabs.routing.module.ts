import { NavegacionTabsPage } from '../navegacion-tabs/navegacion-tabs.page'
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const navegacionTabs: Routes = [
    {
        path: 'navegacion-tabs',
        component: NavegacionTabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/pages/home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'monitoreo',
                children: [
                    {
                        path: '',
                        loadChildren: 'src/pages/monitoreo/monitoreo.module#MonitoreoPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/navegacion-tabs/home',
        pathMatch: 'full'
    }
]

@NgModule({

    declarations: [

    ],
    imports: [
        RouterModule.forChild(navegacionTabs)
    ],
    providers: [

    ],
    exports: [
        RouterModule
    ]
})

export class NavegacionTabsRoutingModule {

}