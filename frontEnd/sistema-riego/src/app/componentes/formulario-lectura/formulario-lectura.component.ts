import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HaciendaRestService} from '../../servicios/hacienda-rest.service';
import {RegionRestService} from '../../servicios/region-rest.service';
import {LecturaRestService} from '../../servicios/rest/historial-rest.service';
import {SensorRestService} from '../../servicios/sensor-rest.service';

@Component({
  selector: 'app-formulario-lectura',
  templateUrl: './formulario-lectura.component.html',
  styleUrls: ['./formulario-lectura.component.css']
})
export class FormularioLecturaComponent implements OnInit {


  lecturas = [];
  sensores = [];

  @Input()
  fecha: string;
  descripcion: string;
  idSensor: number;

  @Input()
  nombreBoton: string;
  @Input()
  nombreBoton1: string;

  @Output()
  formularioValido = new EventEmitter();

  fechaLectura: string;
  descripcionLectura: string;

  Sensor: any = {
    id: ''
  };
  idSensorLectura: number;




  constructor(
    public readonly lecturaRestService: LecturaRestService,
    public readonly sensorRestService: SensorRestService) { }

  ngOnInit() {
    this.fechaLectura = this.fecha;
    this.descripcionLectura = this.descripcion;
    this.idSensorLectura = this.idSensor;
    this.findAll();
    this.findAllSensores();
  }


  emitirFormularioValido() {
    const objetoLectura = {
      fecha: this.fechaLectura,
      descripcion: this.descripcionLectura,
      idSensor: this.idSensorLectura
    };
    // console.log(objetoHacienda)
    this.formularioValido.emit((objetoLectura));
  }
  crear() {

    this.lecturaRestService.create(this.fechaLectura, this.descripcionLectura, this.idSensor).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }
  findAll() {
    this.lecturaRestService.findAll().subscribe(
      resp => {
        console.log(resp);
        this.lecturas = resp;

      }
    );


  }
  findAllSensores() {
    this.sensorRestService.findAll().subscribe(
      resp => {
        console.log(resp);
        this.sensores = resp;

      }
    );


  }

}
