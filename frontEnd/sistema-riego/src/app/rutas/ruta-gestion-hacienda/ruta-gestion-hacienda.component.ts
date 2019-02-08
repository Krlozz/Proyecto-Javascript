import { Component, OnInit } from '@angular/core';
import {HaciendaRestService} from '../../servicios/hacienda-rest.service';
import {Hacienda} from '../../interfaces/hacienda';

@Component({
  selector: 'app-ruta-gestion-hacienda',
  templateUrl: './ruta-gestion-hacienda.component.html',
  styleUrls: ['./ruta-gestion-hacienda.component.css']
})
export class RutaGestionHaciendaComponent implements OnInit {
hacienda: HaciendaEjemplo = {
  nombre: 'hacienda1',
  direccion: 'direccion1',
  telefono: '222'
};
  constructor(private readonly _haciendaRestService: HaciendaRestService) { }

  ngOnInit() {
  }



  crearHacienda(haciendaObjeto){
    const crearHacienda$ = this._haciendaRestService
      .create(
        haciendaObjeto.nombreHacienda,
        haciendaObjeto.direccionHacienda,
        haciendaObjeto.telefonoHacienda,
        haciendaObjeto.idRegionHacienda
      );
    console.log(haciendaObjeto)
  crearHacienda$
    .subscribe(
      (hacienda:Hacienda) =>{
        alert(`Hacienda creada: ${hacienda.nombreHacienda}`)
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
interface HaciendaEjemplo {
  nombre: string;
  direccion: string;
  telefono: string;
}
