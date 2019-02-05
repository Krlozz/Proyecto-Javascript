import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubparcelaRestService} from "../../servicios/subparcela-rest.service";
import {SensorRestService} from "../../servicios/sensor-rest.service";

@Component({
  selector: 'app-formulario-gestion-sensor',
  templateUrl: './formulario-gestion-sensor.component.html',
  styleUrls: ['./formulario-gestion-sensor.component.scss']
})
export class FormularioGestionSensorComponent implements OnInit {

  @Input()

  codigo:string;
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();

  codigoSensor:string;


  constructor(public readonly sensorRestService : SensorRestService){ }

  ngOnInit() {
    this.codigoSensor= this.codigo;

  }

  emitirFormularioValido(){
    const objetoSensor = {

      codigo:this.codigoSensor
    };
    this.formularioValido.emit((objetoSensor))
  }
  crear () {
    this.sensorRestService.create(this.codigoSensor).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }
}
