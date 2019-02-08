import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioRestService } from '../../servicios/usuario-rest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuarioAActualizar: Usuario;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _router: Router,
  ) { }

  ngOnInit() {

    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaVerDetalleUsuarioComponent) => {
          const usuarios$ = this._usuarioRestService
            .findOneById(parametros.idUsuario);

          usuarios$
            .subscribe(
              (usuarios: Usuario) => {

                this.usuarioAActualizar = usuarios;
                console.log(this.usuarioAActualizar, 'alllll');
              },
              (error) => {
                console.log('Error: ', error);
              }
            );
        }
      );

  }

  actualizarUsuario(formulario: NgForm) {
    const idUsuarioAActualizar = this.usuarioAActualizar.id;
    this.usuarioAActualizar = formulario.value;
    const usuarioActualizado$ = this._usuarioRestService.updateOneById(this.usuarioAActualizar, idUsuarioAActualizar);

    usuarioActualizado$
      .subscribe(
        (usuarioActualizado: Usuario) => {

          const url = [
            '/gestion-usuarios'
          ];

          alert('Usuario:   ' + usuarioActualizado.nombreUsuario + 'Actualizado .......!!!!');

          this._router.navigate(url);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

}

interface ParametrosRutaVerDetalleUsuarioComponent {
  idUsuario: string;
}


