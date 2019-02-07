import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioRestService} from '../../servicios/usuario-rest.service';
import {HaciendaRestService} from '../../servicios/hacienda-rest.service';
import {RegionRestService} from '../../servicios/region-rest.service';
import {AuthService} from '../../servicios/rest/auth.service';
import {RolRestService} from '../../servicios/rol-rest.service';
import {Usuario} from '../../interfaces/usuario';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  usuarios = [];
  haciendas = [];

  @Input()
  nombre: string;
  cedula: string;
  direccion: string;
  telefono: string;
  password: string;
  idHacienda: number;

  @Input()
  nombreBoton: string;
  @Output()
  formularioValido = new EventEmitter();
  nombreUsuario: string;
  cedulaUsuario: string;
  direccionUsuario: string;
  telefonoUsuario: string;
  passwordUsuario: string;
  Hacienda: any = {
    id: ''
  };
  rol: any;
  idHaciendaUsuario: number;

  todosRoles: any;

  constructor(
    public readonly usuarioRestService: UsuarioRestService,
    public readonly haciendaRestService: HaciendaRestService,
    private readonly _rolService: RolRestService) { }

  ngOnInit() {
    this.nombreUsuario = this.nombre;
    this.cedulaUsuario = this.cedula;
    this.direccionUsuario = this.direccion;
    this.telefonoUsuario = this.telefono;
    this.passwordUsuario = this.password;
    this.idHaciendaUsuario = this.idHacienda;

    this.findAll();
    this.findAllHaciendas();
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


  emitirFormularioValido() {

    const objetoUsuario = {
      nombreUsuario: this.nombreUsuario,
      cedulaUsuario: this.cedulaUsuario,
      direccionUsuario: this.direccionUsuario,
      telefonoUsuario: this.telefonoUsuario,
      password: this.passwordUsuario,
      idHacienda: this.idHaciendaUsuario
    };
    this.formularioValido.emit((objetoUsuario));
  }
  crear() {
    console.log(this.rol, 'dasdsdasd', this.nombreUsuario);
    this.usuarioRestService.create(this.nombreUsuario, this.cedulaUsuario,
      this.direccionUsuario, this.telefonoUsuario, this.passwordUsuario, this.idHaciendaUsuario).subscribe(
      resp => {
        console.log(resp);
        // const rolPorUsuarioCrear = {
        //   idUsuario: resp.id,
        //   idRol:
        // }
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
