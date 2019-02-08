import { CrearRolXUserRestService } from './../../servicios/crear-rolXUser-rest.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioRestService } from '../../servicios/usuario-rest.service';
import { HaciendaRestService } from '../../servicios/hacienda-rest.service';
import { RegionRestService } from '../../servicios/region-rest.service';
import { AuthService } from '../../servicios/rest/auth.service';
import { RolRestService } from '../../servicios/rol-rest.service';
import { Usuario } from '../../interfaces/usuario';
import {Router} from "@angular/router";


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  usuarios = [];
  haciendas = [];

  /* @Input()
  nombre: string;
  cedula: string;
  direccion: string;
  telefono: string;
  password: string;
  idHacienda: number; */

  @Input() nombreBoton: string;
  @Output() formularioValido = new EventEmitter();
  nombreUsuario: string;
  cedulaUsuario: string;
  direccionUsuario: string;
  telefonoUsuario: string;
  passwordUsuario: string;
  Hacienda: number
  rol: number;
  idHaciendaUsuario: number;

  todosRoles: any;

  constructor(
    public readonly usuarioRestService: UsuarioRestService,
    public readonly haciendaRestService: HaciendaRestService,
    private readonly _rolService: RolRestService,
    private readonly _crearRolXUserRestService: CrearRolXUserRestService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    /* this.nombreUsuario = this.nombre;
    this.cedulaUsuario = this.cedula;
    this.direccionUsuario = this.direccion;
    this.telefonoUsuario = this.telefono;
    this.passwordUsuario = this.password;
    this.idHaciendaUsuario = this.idHacienda; */

    this.findAll();
    this.findAllHaciendas();
    this.obtenerRoles();
    this.emitirFormularioValido()
  }

  obtenerRoles() {

    this._rolService.obtnerRoles()
      .subscribe(
        roles => {
          this.todosRoles = roles;
        }

      );
  }


  emitirFormularioValido() {
    const objetoUsuario = {
      nombreUsuario: this.nombreUsuario,
      cedulaUsuario: this.cedulaUsuario,
      direccionUsuario: this.direccionUsuario,
      telefonoUsuario: this.telefonoUsuario,
      password: this.passwordUsuario,
      idHacienda: this.idHaciendaUsuario,
    };
    this.formularioValido.emit(objetoUsuario);
  }

  crear() {
    console.log(this.rol, 'dasdsdasd', this.idHaciendaUsuario);
    this.usuarioRestService.create(this.nombreUsuario, this.cedulaUsuario,
      this.direccionUsuario, this.telefonoUsuario, this.passwordUsuario, this.idHaciendaUsuario)
      .subscribe(
        usuarioCreado => {
          const idUsuarioCreado = usuarioCreado.id
          const idRolSeleccionado = this.rol

          const usuarioRolCrear = {
            idUsuario: idUsuarioCreado,
            idRol: idRolSeleccionado
          }
          console.log(usuarioCreado);
          this._crearRolXUserRestService.create(usuarioRolCrear)
            .subscribe(res => {
              console.log(res, 'se creooo')
            })
        }
      );
  }


  findAll() {
    this.usuarioRestService.findAll().subscribe(
      resp => {
        console.log(resp);
        this.usuarios = resp;

      }
    );


  }
  findAllHaciendas() {
    this.haciendaRestService.findAll().subscribe(
      resp => {
        console.log(resp);
        this.haciendas = resp;

      }
    );

  }

  eliminar(usuario: Usuario) {

    const usuarioEliminado$ = this.usuarioRestService.delete(usuario.id);

    usuarioEliminado$
      .subscribe(
        (usuarioEliminado: Usuario) => {
          console.log('Se elimino:', usuarioEliminado);

          const indice = this.usuarios
            .findIndex((u) => u.id === usuario.id);

          this.usuarios.splice(indice, 1);

        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

}
