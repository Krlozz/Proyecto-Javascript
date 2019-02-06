import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcelaRestService} from "../../servicios/parcela-rest.service";
import {SubparcelaRestService} from "../../servicios/subparcela-rest.service";

@Component({
  selector: 'app-formulario-gestion-subparcela',
  templateUrl: './formulario-gestion-subparcela.component.html',
  styleUrls: ['./formulario-gestion-subparcela.component.scss']
})
export class FormularioGestionSubparcelaComponent implements OnInit {

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
  subparcela:any = {
    id:''
  }
  idParcelaSubparcela:number;

  constructor(public readonly subparcelaRestService : SubparcelaRestService
  public readonly  parcelaRestServices:ParcelaRestService){ }

  ngOnInit() {
    this.medidasSubparcela= this.medidas;
    this.codigoSubparcela= this.codigo;
  }

  emitirFormularioValido(){
    const objetoSubparcela = {
      medidas:this.medidasSubparcela,
      codigo:this.codigoSubparcela,
    };
    this.formularioValido.emit((objetoSubparcela))
  }
  crear () {
    this.subparcelaRestService.create(this.codigoSubparcela , this.medidasSubparcela).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }
}
