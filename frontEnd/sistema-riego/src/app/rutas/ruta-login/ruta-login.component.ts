import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/rest/auth.service';
import {RolRestService} from '../../servicios/rol-rest.service';

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

  constructor(private readonly _authService: AuthService, private readonly _rolService: RolRestService) { }

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

  login() {
    console.log(this.usuario.rol);
    const respuestaLogin$ = this._authService
      .login(
        this.usuario.cedulaUsuario,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          this._authService.usuario = usuario;
          console.log(usuario);
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
