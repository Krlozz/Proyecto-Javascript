import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcelaRestService} from "../../servicios/parcela-rest.service";

@Component({
  selector: 'app-formulario-gestion-parcela',
  templateUrl: './formulario-gestion-parcela.component.html',
  styleUrls: ['./formulario-gestion-parcela.component.scss']
})
export class FormularioGestionParcelaComponent implements OnInit {

  @Input()
  medidas:string;
  codigo:string;
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  medidasParcela:string;
  codigoParcela:string;


  constructor(public readonly parcelaRestService : ParcelaRestService) { }

  ngOnInit() {
    this.codigoParcela= this.codigo;
    this.medidasParcela= this.medidas;

  }

  emitirFormularioValido(){
    const objetoParcela = {
      codigo:this.codigoParcela,

      medidas:this.medidasParcela
    };
    this.formularioValido.emit((objetoParcela))
  }
  crear () {
    this.parcelaRestService.create(this.codigoParcela , this.medidasParcela).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }
}
