import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {HaciendaRestService} from "../../servicios/hacienda-rest.service";
import {RegionRestService} from "../../servicios/region-rest.service";
@Component({
  selector: 'app-formulario-hacienda',
  templateUrl: './formulario-hacienda.component.html',
  styleUrls: ['./formulario-hacienda.component.scss']
})
export class FormularioHaciendaComponent implements OnInit {

  haciendas = [];
  regiones=[];

  @Input()
  nombre:string;
  direccion:string;
  telefono:string;
  idRegion:number;

  @Input()
  nombreBoton:string;
  @Input()
  nombreBoton1:string;

  @Output()
  formularioValido = new EventEmitter();

  nombreHacienda:string;
  direccionHacienda:string;
  telefonoHacienda:string
  Region:any = {
  id:''
  }
  idRegionHacienda:number




  constructor(
    public readonly haciendaRestService : HaciendaRestService,
  public readonly regionRestService:RegionRestService) { }

  ngOnInit() {
    this.nombreHacienda= this.nombre;
    this.direccionHacienda= this.direccion;
    this.telefonoHacienda= this.telefono
    this.idRegionHacienda= this.idRegion
    this.findAll()
    this.findAllRegiones()
  }


  emitirFormularioValido(){
    const objetoHacienda = {
      nombre:this.nombreHacienda,
      direccion:this.direccionHacienda,
      telefono:this.telefonoHacienda,
      idRegion:this.idRegionHacienda
    };
    // console.log(objetoHacienda)
    this.formularioValido.emit((objetoHacienda))
  }
  crear () {
    console.log(this.Region, "Aca tan ")

    this.haciendaRestService.create(this.nombreHacienda, this.direccionHacienda, this.telefonoHacienda,
      this.idRegionHacienda).subscribe(
      resp=> {
        console.log(resp)
    }
    )
  }
  findAll(){
    this.haciendaRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.haciendas=resp

      }
    )


  }
  findAllRegiones(){
    this.regionRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.regiones=resp

      }
    )


  }


}
