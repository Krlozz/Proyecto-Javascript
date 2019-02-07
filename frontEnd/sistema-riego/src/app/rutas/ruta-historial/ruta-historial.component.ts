import { Component, OnInit } from '@angular/core';
import {UsuarioRestService} from "../../servicios/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";
import {LecturaRestService} from "../../servicios/rest/historial-rest.service";
import {Lectura} from "../../interfaces/lectura";

@Component({
  selector: 'app-ruta-historial',
  templateUrl: './ruta-historial.component.html',
  styleUrls: ['./ruta-historial.component.css']
})
export class RutaHistorialComponent implements OnInit {
  constructor(private readonly _lecturaRestService: LecturaRestService) { }

  ngOnInit() {
  }

  lectura(lecturaObjeto){
    const crearLectura$ = this._lecturaRestService
      .create(
        lecturaObjeto.fechaLectura,
        lecturaObjeto.descripcionLectura,
        lecturaObjeto.idRegionHacienda,


      );
    crearLectura$
      .subscribe(
        (lectura:Lectura) =>{
          alert(`Lectura creada: ${lectura.descripcionLectura}`)
        },
        (error) =>{
          console.log('Error: ', error)
        }
      );

  }

}
