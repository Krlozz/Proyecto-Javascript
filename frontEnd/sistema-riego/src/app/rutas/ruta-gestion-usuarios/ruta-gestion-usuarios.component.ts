import { Component, OnInit } from '@angular/core';
import {UsuarioRestService} from "../../servicios/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.css']
})
export class RutaGestionUsuariosComponent implements OnInit {

  constructor(private readonly _usuarioRestService: UsuarioRestService) { }

  ngOnInit() {
  }

  crearUsuario(usuarioObjeto){
    console.log(usuarioObjeto,'sssss');
    const crearUsuario$ = this._usuarioRestService
      .create(
        usuarioObjeto.nombreUsuario,
        usuarioObjeto.cedulaUsuario,
        usuarioObjeto.password,
        usuarioObjeto.direccionUsuario,
        usuarioObjeto.telefonoUsuario,
        usuarioObjeto.idHacienda

      );
    crearUsuario$
      .subscribe(
        (usuario:Usuario) =>{
          alert(`Usuario creado: ${usuario.nombreUsuario}`)
        },
        (error) =>{
          console.log('Error: ', error)
        }
      );

  }

  nombreContieneA(nombre:String):boolean{
    return nombre.toLowerCase().includes('a')
  }
  mostrarEnConsola(objeto){
    console.log(objeto)
    console.log(objeto)
  }



}
interface UsuarioEjemplo {
  nombre: string;
  cedula: string;
  telefono: string;
}
