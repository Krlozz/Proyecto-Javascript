import { Component, OnInit } from '@angular/core';
import {Parcela} from "../../interfaces/parcela";
import {ParcelaRestService} from "../../servicios/parcela-rest.service";

@Component({
  selector: 'app-ruta-gestion-parcela',
  templateUrl: './ruta-gestion-parcela.component.html',
  styleUrls: ['./ruta-gestion-parcela.component.scss']
})
export class RutaGestionParcelaComponent implements OnInit {

  parcela: ParcelaEjemplo = {
    codigo: 'codigo1',
    medidas: 'medidas1',

  };
  constructor(private readonly parcelaRestService: ParcelaRestService) { }

  ngOnInit() {
  }

  crearParcela(parcelaObjeto){
    const crearParcela$ = this.parcelaRestService
      .create(
        parcelaObjeto.codigoParcela,
        parcelaObjeto.medidasParcela,
        parcelaObjeto.idUsuarioParcela,
        parcelaObjeto.idHaciendaParcela
      );
    crearParcela$
      .subscribe(
        (parcela:Parcela) =>{
          alert(`Parcela creada: ${parcela.codigoParcela}`)
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
interface ParcelaEjemplo {
  codigo: string;
  medidas: string;

}
