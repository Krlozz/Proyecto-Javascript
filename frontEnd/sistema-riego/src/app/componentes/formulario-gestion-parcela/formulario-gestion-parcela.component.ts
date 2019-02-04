import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.medidasParcela= this.medidas;
    this.codigoParcela= this.codigo;
  }

  emitirFormularioValido(){
    const objetoParcela = {
      medidas:this.medidasParcela,
      codigo:this.codigoParcela,
    };
    this.formularioValido.emit((objetoParcela))
  }

}
