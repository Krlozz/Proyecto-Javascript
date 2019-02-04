import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {HaciendaRestService} from "../../servicios/hacienda-rest.service";

@Component({
  selector: 'app-formulario-hacienda',
  templateUrl: './formulario-hacienda.component.html',
  styleUrls: ['./formulario-hacienda.component.scss']
})
export class FormularioHaciendaComponent implements OnInit {

  @Input()
  nombre:string;
  direccion:string;
  telefono:string;
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  nombreHacienda:string;
  direccionHacienda:string;
  telefonoHacienda:string


  constructor(
    public readonly haciendaRestService : HaciendaRestService) { }

  ngOnInit() {
    this.nombreHacienda= this.nombre;
    this.direccionHacienda= this.direccion;
    this.telefonoHacienda= this.telefono
  }

  emitirFormularioValido(){
    const objetoHacienda = {
      nombre:this.nombreHacienda,
      direccion:this.direccionHacienda,
      telefono:this.telefonoHacienda
    };
    // console.log(objetoHacienda)
    this.formularioValido.emit((objetoHacienda))
  }
  crear () {
    console.log(this.nombreHacienda + this.direccionHacienda+this.telefonoHacienda, "Aca tan ")
    this.haciendaRestService.create(this.nombreHacienda, this.direccionHacienda, this.telefonoHacienda).subscribe(
      resp=> {
        console.log(resp)
    }
    )
  }

}
