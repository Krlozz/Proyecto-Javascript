import { CrearRolXUserRestService } from './../../servicios/crear-rolXUser-rest.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/rest/auth.service';
import { RolRestService } from '../../servicios/rol-rest.service';
import {AutentificacionService} from "../../autentificacion/autentificacion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  usuario = {
    cedulaUsuario: '',
    password: '',
    rol: ''
  };

  constructor(
    private readonly _authService: AuthService,
    private readonly _rolService: RolRestService,
    private readonly _crearRolXUserRestService: CrearRolXUserRestService,
    private readonly _auth:AutentificacionService,
    private readonly _route:Router
  ) { }

  todosRoles: any;


  ngOnInit() {
    this.obtenerRoles();
  }

  obtenerRoles() {

    this._rolService.obtnerRoles().subscribe(
      roles => {
        this.todosRoles = roles;
        // console.log(roles);
      }

    );
  }

  ingresar(){

  }

  login() {
    console.log(this.usuario,'dhdhdhdh' ) ;
    const respuestaLogin$ = this._authService
      .login(
        this.usuario.cedulaUsuario,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          console.log(usuario)
            this._authService.findById(usuario.id)
            .subscribe(res=>{
              console.log(res.rolesUsuarios[0].idRol,'kheeeeeee', this.usuario.rol)
              if(res.rolesUsuarios[0].idRol == this.usuario.rol){
                switch (res.rolesUsuarios[0].idRol) {
                  case 1:
                    // console.log(this._auth.estaLogeadoAdmin,'antes')
                    //   this._auth.estaLogeadoAdmin = false;
                    // console.log(this._auth.estaLogeadoAdmin,'despues')
                        this._route.navigate(['/usuario-administrador'])
                    break
                  case 2:
                    // this._auth.estaLogeadoUser = true
                    this._route.navigate(['/usuario-encargado/perfil/control'])
                    break
                }
              }else {
                alert('error al ingresar')
              }

            })
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
