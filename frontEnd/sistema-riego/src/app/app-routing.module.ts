import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaAcercaComponent} from './rutas/ruta-acerca/ruta-acerca.component';
import {RutaContactanosComponent} from './rutas/ruta-contactanos/ruta-contactanos.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaUsuarioEncargadoComponent} from './rutas/ruta-usuario-encargado/ruta-usuario-encargado.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {RutaNotificacionesComponent} from './rutas/ruta-notificaciones/ruta-notificaciones.component';
import {RutaHistorialComponent} from './rutas/ruta-historial/ruta-historial.component';
import {RutaAjustesComponent} from './rutas/ruta-ajustes/ruta-ajustes.component';
import {RutaReestablecerContraseniaComponent} from './rutas/ruta-reestablecer-contrasenia/ruta-reestablecer-contrasenia.component';
import {RutaUsuarioAdministradorComponent} from './rutas/ruta-usuario-administrador/ruta-usuario-administrador.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaAsignarSensorComponent} from './rutas/ruta-asignar-sensor/ruta-asignar-sensor.component';
import {RutaGestionHaciendaComponent} from './rutas/ruta-gestion-hacienda/ruta-gestion-hacienda.component';
import {RutaParcelasComponent} from './rutas/ruta-parcelas/ruta-parcelas.component';
import {RutaGestionParcelaComponent} from './rutas/ruta-gestion-parcela/ruta-gestion-parcela.component';
import {RutaGestionSubparcelaComponent} from './rutas/ruta-gestion-subparcela/ruta-gestion-subparcela.component';
import {Ruta404Component} from './rutas/ruta404/ruta404.component';
import {RutaVerDetalleUsuarioComponent} from "./rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component";

const routes: Routes = [


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },

  {
    path: 'inicio',
    component: RutaInicioComponent,

  },

  {
    path: 'acerca',
    component: RutaAcercaComponent
  },

  {
    path: 'contactanos',
    component: RutaContactanosComponent
  },

  {
    path: 'login',
    component: RutaLoginComponent,
    children: [
      {
        path: 'usuario-encargado',
        component: RutaUsuarioEncargadoComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'perfil'
          },
          {
            path: 'perfil',
            component: RutaPerfilComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'historial'
              },
              {
                path: 'notificaciones',
                component: RutaNotificacionesComponent
              },
              // {
              //   path: 'historial',
              //   component: RutaHistorialComponent
              // },
              {
                path: 'ajustes',
                component: RutaAjustesComponent
              },
            ]
          },
          {
            path: 'reestablecer-contrasenia',
            component: RutaReestablecerContraseniaComponent
          },
        ],
      },
      {
        path: 'usuario-administrador',
        component: RutaUsuarioAdministradorComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'gestion-usuarios'
          },
          // {
          //   path: 'gestion-usuarios',
          //   component: RutaGestionUsuariosComponent
          // },
          // {
          //   path: 'asignar-sensor',
          //   component: RutaAsignarSensorComponent
          // },
          // {
          //   path: 'gestion-hacienda',
          //   component: RutaGestionHaciendaComponent
          // },
          // {
          //   path: 'ver-usuario/:idUsuario',  //  /login/usuario-administrador/ver-usuario
          //   component: RutaVerDetalleUsuarioComponent
          // },
          {
            path: 'parcelas',
            component: RutaParcelasComponent,
            children: [
              // {
              //   path: 'gestion-parcela',
              //   component: RutaGestionParcelaComponent
              // },
              // {
              //   path: 'gestion-subparcela',
              //   component: RutaGestionSubparcelaComponent
              // },
            ]
          },
        ],
      },
    ]
  },

  {
    path: 'usuario-encargado/perfil/control',
    component: RutaHistorialComponent
  },

  {
    path: 'usuario-administrador/gestion-usuarios',
    component: RutaGestionUsuariosComponent
  },

  {
    path: 'usuario-administrador/asignar-sensor',
    component: RutaAsignarSensorComponent
  },

  {
    path: 'usuario-administrador/gestion-hacienda',
    component: RutaGestionHaciendaComponent
  },

  {
    path: 'usuario-administrador/gestion-usuarios/ver-usuario/:idUsuario',  //  /login/usuario-administrador/ver-usuario
    component: RutaVerDetalleUsuarioComponent
  },

  {
    path: 'usuario-administrador/gestion-parcela',
    component: RutaGestionParcelaComponent
  },
  {
    path: 'usuario-administrador/gestion-subparcela',
    component: RutaGestionSubparcelaComponent
  },



  {
    path: 'no-encontrado',
    component: Ruta404Component
  },

  {
    path: '**',
    redirectTo: 'no-encontrado'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
