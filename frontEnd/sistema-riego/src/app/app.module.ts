import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaAcercaComponent } from './rutas/ruta-acerca/ruta-acerca.component';
import { RutaContactanosComponent } from './rutas/ruta-contactanos/ruta-contactanos.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaUsuarioEncargadoComponent } from './rutas/ruta-usuario-encargado/ruta-usuario-encargado.component';
import { RutaUsuarioAdministradorComponent } from './rutas/ruta-usuario-administrador/ruta-usuario-administrador.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaNotificacionesComponent } from './rutas/ruta-notificaciones/ruta-notificaciones.component';
import { RutaHistorialComponent } from './rutas/ruta-historial/ruta-historial.component';
import { RutaAjustesComponent } from './rutas/ruta-ajustes/ruta-ajustes.component';
import { RutaReestablecerContrasenaComponent } from './rutas/ruta-reestablecer-contrasena/ruta-reestablecer-contrasena.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaAsignarSensorComponent } from './rutas/ruta-asignar-sensor/ruta-asignar-sensor.component';
import { RutaGestionHaciendaComponent } from './rutas/ruta-gestion-hacienda/ruta-gestion-hacienda.component';
import { RutaParcelasComponent } from './rutas/ruta-parcelas/ruta-parcelas.component';
import { RutaGestionParcelaComponent } from './rutas/ruta-gestion-parcela/ruta-gestion-parcela.component';
import { RutaGestionSubparcelaComponent } from './rutas/ruta-gestion-subparcela/ruta-gestion-subparcela.component';
import { FormularioHaciendaComponent } from './componentes/formulario-hacienda/formulario-hacienda.component';
import {HaciendaRestService} from "./servicios/hacienda-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {CardModule, ChartModule, InputTextModule, MessageModule, MessagesModule} from "primeng/primeng";
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { FormularioActualizarHaciendaComponent } from './componentes/formulario-actualizar-hacienda/formulario-actualizar-hacienda.component';
import { FormularioActualizarUsuarioComponent } from './componentes/formulario-actualizar-usuario/formulario-actualizar-usuario.component';
import { FormularioGestionParcelaComponent } from './componentes/formulario-gestion-parcela/formulario-gestion-parcela.component';
import { FormularioGestionSubparcelaComponent } from './componentes/formulario-gestion-subparcela/formulario-gestion-subparcela.component';
import { FormularioGestionLecturaComponent } from './componentes/formulario-gestion-lectura/formulario-gestion-lectura.component';
import { FormularioGestionSensorComponent } from './componentes/formulario-gestion-sensor/formulario-gestion-sensor.component';
import { FormularioActualizarSensorComponent } from './componentes/formulario-actualizar-sensor/formulario-actualizar-sensor.component';
import {UsuarioRestService} from "./servicios/usuario-rest.service";
import {ParcelaRestService} from "./servicios/parcela-rest.service";
import {SubparcelaRestService} from "./servicios/subparcela-rest.service";
import {SensorRestService} from "./servicios/sensor-rest.service";
import {RegionRestService} from "./servicios/region-rest.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaAcercaComponent,
    RutaContactanosComponent,
    RutaLoginComponent,
    Ruta404Component,
    RutaUsuarioEncargadoComponent,
    RutaUsuarioAdministradorComponent,
    RutaPerfilComponent,
    RutaNotificacionesComponent,
    RutaHistorialComponent,
    RutaAjustesComponent,
    RutaReestablecerContrasenaComponent,
    RutaGestionUsuariosComponent,
    RutaAsignarSensorComponent,
    RutaGestionHaciendaComponent,
    RutaParcelasComponent,
    RutaGestionParcelaComponent,
    RutaGestionSubparcelaComponent,
    FormularioHaciendaComponent,
    FormularioUsuarioComponent,
    FormularioActualizarHaciendaComponent,
    FormularioActualizarUsuarioComponent,
    FormularioGestionParcelaComponent,
    FormularioGestionSubparcelaComponent,
    FormularioGestionLecturaComponent,
    FormularioGestionSensorComponent,
    FormularioActualizarSensorComponent
  ],  // Components
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Acceso a un servicio HttpClient
    FormsModule,
    BrowserAnimationsModule, // Animaciones
    ButtonModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    CardModule,
    ChartModule
  ],  // Modulos
      providers: [
HaciendaRestService,
        UsuarioRestService,
        ParcelaRestService,
        SubparcelaRestService,
        SensorRestService,
        RegionRestService
  ], // Servicios
  bootstrap: [AppComponent] // Componente Principal
})
export class AppModule { }




/*


  ->*Inicio    -> Componente Principal
    -*Inicio
    -*Acerca
    -*Contactanos
    -*Iniciar Sesion (Login)

        -UsuarioEncargado             /login/usuario-encargado
            -Perfil                   /login/usuario-encargado/perfil
                -Notificaciones       /login/usuario-encargado/perfil/notificaciones
                -Historial            /login/usuario-encargado/perfil/historial
                -Ajustes              /login/usuario-encargado/perfil/ajustes
            -ReestablecerContrasena   /login/usuario-encargado/reestablecer-contrasena

        -UsuarioAdministrador         /login/usuario-administrador
            -GestionUsuarios          /login/usuario-administrador/gestion-usuarios
            -AsignarSensor            /login/usuario-administrador/asignar-sensor
            -GestionHacienda          /login/usuario-administrador/gestion-hacienda
            -Parcelas                 /login/usuario-administrador/parcelas
                -GestionParcela       /login/usuario-administrador/parcelas/gestion-parcela
                -GestionSubparcela    /login/usuario-administrador/parcelas/gestion-subparcela

    -*404 -> Not Found



Etiqueta para meter rutas hijosdentro de la ruta
principal o dentro de cualquier ruta es:
<router-outlet></router-outlet>

 */
