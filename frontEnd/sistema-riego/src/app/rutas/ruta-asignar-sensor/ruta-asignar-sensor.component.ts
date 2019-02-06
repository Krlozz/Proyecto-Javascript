import { Component, OnInit } from '@angular/core';

import {SensorRestService} from "../../servicios/sensor-rest.service";
import {Sensor} from "../../interfaces/sensor";

@Component({
  selector: 'app-ruta-asignar-sensor',
  templateUrl: './ruta-asignar-sensor.component.html',
  styleUrls: ['./ruta-asignar-sensor.component.scss']
})
export class RutaAsignarSensorComponent implements OnInit {

  constructor(private readonly _sensorRestService: SensorRestService) { }


  ngOnInit() {
  }



  crearSensor(sensorObjeto){
    const crearSensor$ = this._sensorRestService
      .create(
        sensorObjeto.codigoSensor)
    crearSensor$
      .subscribe(
        (sensor:Sensor) =>{
          alert(`Sensor creado: ${sensor.codigoSensor}`)
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
