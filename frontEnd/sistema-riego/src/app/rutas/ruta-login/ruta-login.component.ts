import { CrearRolXUserRestService } from './../../servicios/crear-rolXUser-rest.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/rest/auth.service';
import { RolRestService } from '../../servicios/rol-rest.service';

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
    private readonly _crearRolXUserRestService: CrearRolXUserRestService
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
            this._authService.findById(usuario.id)
            .subscribe(res=>{
              console.log(res,'kheeeeeee')
            })
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
