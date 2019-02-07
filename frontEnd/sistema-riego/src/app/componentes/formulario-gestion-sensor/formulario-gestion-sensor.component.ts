import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubparcelaRestService} from "../../servicios/subparcela-rest.service";
import {SensorRestService} from "../../servicios/sensor-rest.service";
import {findAll} from "@angular/compiler-cli/src/ngcc/src/utils";

@Component({
  selector: 'app-formulario-gestion-sensor',
  templateUrl: './formulario-gestion-sensor.component.html',
  styleUrls: ['./formulario-gestion-sensor.component.scss']
})
export class FormularioGestionSensorComponent implements OnInit {
  sensores=[]
  subparcelas=[]

  @Input()

  codigo:string;
  idSubparcela:number
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();

  codigoSensor:string;
  subparcela:any = {
    id:''
  }
  idSubparcelaSensor:number;

  constructor(public readonly sensorRestService : SensorRestService,
              public readonly subparcelaRestService: SubparcelaRestService){ }

  ngOnInit() {
    this.codigoSensor= this.codigo;
    this.idSubparcelaSensor= this.idSubparcela;
    this.findAll()
    this.findAllSubparcelas()
  }

  emitirFormularioValido(){
    const objetoSensor = {

      codigo:this.codigoSensor,
      idSubparcela:this.idSubparcelaSensor
    };
    this.formularioValido.emit((objetoSensor))
  }
  crear () {
    this.sensorRestService.create(this.codigoSensor, this.idSubparcelaSensor).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }

  findAll(){
    this.sensorRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.sensores=resp

      }
    )


  }
  findAllSubparcelas(){
    this.subparcelaRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.subparcelas=resp

      }
    )


  }

}
