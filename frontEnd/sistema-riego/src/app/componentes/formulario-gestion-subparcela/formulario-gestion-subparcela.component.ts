import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcelaRestService} from "../../servicios/parcela-rest.service";
import {SubparcelaRestService} from "../../servicios/subparcela-rest.service";

@Component({
  selector: 'app-formulario-gestion-subparcela',
  templateUrl: './formulario-gestion-subparcela.component.html',
  styleUrls: ['./formulario-gestion-subparcela.component.scss']
})
export class FormularioGestionSubparcelaComponent implements OnInit {

  subparcelas =[]
  parcelas=[]
  @Input()
  medidas:string;
  codigo:string;

  idParcela:any;
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  medidasSubparcela:string;
  codigoSubparcela:string;

  parcela:any = {
    id:''
  }
  idParcelaSubparcela:number;

  constructor(public readonly subparcelaRestService : SubparcelaRestService,
              public readonly  parcelaRestServices:ParcelaRestService
  ){ }


  ngOnInit(): void {
    this.medidasSubparcela= this.medidas;
    this.codigoSubparcela= this.codigo;
    this.idParcelaSubparcela= this.idParcela

    this.findAll()
    this.findAllParcelas()
  }





  emitirFormularioValido(){
    const objetoSubparcela = {
      medidas:this.medidasSubparcela,
      codigo:this.codigoSubparcela,
      idParcela:this.idParcelaSubparcela
    };
    this.formularioValido.emit((objetoSubparcela))
  }
  crear () {
    this.subparcelaRestService.create(this.codigoSubparcela , this.medidasSubparcela, this.idParcelaSubparcela).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }

  findAll(){
    this.subparcelaRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.subparcelas=resp

      }
    )


  }
  findAllParcelas(){
    this.parcelaRestServices.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.parcelas=resp

      }
    )


  }
}
