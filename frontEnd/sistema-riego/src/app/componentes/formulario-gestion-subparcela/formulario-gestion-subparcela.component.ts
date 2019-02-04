import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-gestion-subparcela',
  templateUrl: './formulario-gestion-subparcela.component.html',
  styleUrls: ['./formulario-gestion-subparcela.component.scss']
})
export class FormularioGestionSubparcelaComponent implements OnInit {

  @Input()
  medidas:string;
  codigo:string;
  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  medidasSubparcela:string;
  codigoSubparcela:string;


  constructor() { }

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

}
