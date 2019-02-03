import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaAcercaComponent } from './rutas/ruta-acerca/ruta-acerca.component';
import { RutaAjustesComponent } from './rutas/ruta-ajustes/ruta-ajustes.component';
import { RutaAsignarSensorComponent } from './rutas/ruta-asignar-sensor/ruta-asignar-sensor.component';
import { RutaContactanosComponent } from './rutas/ruta-contactanos/ruta-contactanos.component';
import { RutaGestionHaciendaComponent } from './rutas/ruta-gestion-hacienda/ruta-gestion-hacienda.component';
import { RutaGestionParcelaComponent } from './rutas/ruta-gestion-parcela/ruta-gestion-parcela.component';
import { RutaGestionSubparcelaComponent } from './rutas/ruta-gestion-subparcela/ruta-gestion-subparcela.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaHistorialComponent } from './rutas/ruta-historial/ruta-historial.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaNotificacionesComponent } from './rutas/ruta-notificaciones/ruta-notificaciones.component';
import { RutaParcelasComponent } from './rutas/ruta-parcelas/ruta-parcelas.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaReestablecerContraseniaComponent } from './rutas/ruta-reestablecer-contrasenia/ruta-reestablecer-contrasenia.component';
import { RutaUsuarioAdministradorComponent } from './rutas/ruta-usuario-administrador/ruta-usuario-administrador.component';
import { RutaUsuarioEncargadoComponent } from './rutas/ruta-usuario-encargado/ruta-usuario-encargado.component';
import { RutaActualizarUsuarioComponent } from './rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component';
import { RutaActualizarHaciendaComponent } from './rutas/ruta-actualizar-hacienda/ruta-actualizar-hacienda.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    Ruta404Component,
    RutaAcercaComponent,
    RutaAjustesComponent,
    RutaAsignarSensorComponent,
    RutaContactanosComponent,
    RutaGestionHaciendaComponent,
    RutaGestionParcelaComponent,
    RutaGestionSubparcelaComponent,
    RutaGestionUsuariosComponent,
    RutaHistorialComponent,
    RutaInicioComponent,
    RutaNotificacionesComponent,
    RutaParcelasComponent,
    RutaPerfilComponent,
    RutaReestablecerContraseniaComponent,
    RutaUsuarioAdministradorComponent,
    RutaUsuarioEncargadoComponent,
    RutaActualizarUsuarioComponent,
    RutaActualizarHaciendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
