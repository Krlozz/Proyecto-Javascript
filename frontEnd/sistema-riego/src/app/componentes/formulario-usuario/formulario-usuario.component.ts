import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  nombre:string;
  cedula:string;
  direccion:string;
  telefono:string;
  password:string;

  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  nombreUsuario:string;
  cedulaUsuario:string;
  direccionUsuario:string;
  telefonoUsuario:string;
  passwordUsuario:string;


  constructor() { }

  ngOnInit() {
    this.nombreUsuario= this.nombre;
    this.cedulaUsuario= this.cedula;
    this.direccionUsuario= this.direccion;
    this.telefonoUsuario= this.telefono
    this.passwordUsuario= this.password
  }

  emitirFormularioValido(){
    const objetoUsuario = {
      nombre:this.nombreUsuario,
      cedula:this.cedulaUsuario,
      direccion:this.direccionUsuario,
      telefono:this.telefonoUsuario,
      password:this.passwordUsuario
    };
    this.formularioValido.emit((objetoUsuario))
  }

}