import { Component, OnInit } from '@angular/core';
import {Subparcela} from "../../interfaces/subparcela";
import {SubparcelaRestService} from "../../servicios/subparcela-rest.service";

@Component({
  selector: 'app-ruta-gestion-subparcela',
  templateUrl: './ruta-gestion-subparcela.component.html',
  styleUrls: ['./ruta-gestion-subparcela.component.scss']
})
export class RutaGestionSubparcelaComponent implements OnInit {

  subparcela: SubparcelaEjemplo = {
    codigo: 'hacienda1',
    medidas: 'direccion1',

  };
  constructor(private readonly _subparcelaRestService: SubparcelaRestService) { }

  ngOnInit() {
  }

  crearSubparcela(subparcelaObjeto){
    const crearSubparcela = this._subparcelaRestService
      .create(
        subparcelaObjeto.codigo,
        subparcelaObjeto.medidas
      );
    crearSubparcela
      .subscribe(
        (subparcela:Subparcela) =>{
          alert(`Subparcela creada: ${subparcela.codigo}`)
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
interface SubparcelaEjemplo {
  codigo: string;
  medidas: string;



}
