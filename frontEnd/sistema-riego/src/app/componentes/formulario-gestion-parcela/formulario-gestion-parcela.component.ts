import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParcelaRestService} from "../../servicios/parcela-rest.service";
import {HaciendaRestService} from "../../servicios/hacienda-rest.service";
import {UsuarioRestService} from "../../servicios/usuario-rest.service";

@Component({
  selector: 'app-formulario-gestion-parcela',
  templateUrl: './formulario-gestion-parcela.component.html',
  styleUrls: ['./formulario-gestion-parcela.component.scss']
})
export class FormularioGestionParcelaComponent implements OnInit {

  haciendas=[];
  usuarios=[];
  parcelas=[];

  @Input()
  medidas:string;
  codigo:string;
  idHacienda:any
  idUsuario:any


  @Input()
  nombreBoton:string;
  @Output()
  formularioValido = new EventEmitter();
  medidasParcela:string;
  codigoParcela:string;
  Hacienda:any = {
    id:''
  }
  Usuario:any = {
    id:''
  }
  idHaciendaParcela:number;
  idUsuarioParcela:number


  constructor(public readonly parcelaRestService : ParcelaRestService,
  public readonly haciendaRestService:HaciendaRestService,
              public readonly usuarioRestService:UsuarioRestService) { }

  ngOnInit() {
    this.codigoParcela= this.codigo;
    this.medidasParcela= this.medidas;
this.idHaciendaParcela= this.idHacienda
    this.idUsuarioParcela= this.idUsuario

    this.findAll()
    this.findAllHaciendas()
    this.findAllUsuarios()
  }

  emitirFormularioValido(){
    const objetoParcela = {
      codigo:this.codigoParcela,

      medidas:this.medidasParcela,
      idHacienda:this.idHaciendaParcela,
      idUsuario:this.idUsuarioParcela
    };
    this.formularioValido.emit((objetoParcela))
  }
  crear () {
    this.parcelaRestService.create(this.codigoParcela , this.medidasParcela, this.idHaciendaParcela, this.idUsuarioParcela).subscribe(
      resp=> {
        console.log(resp)
      }
    )
  }
  findAll(){
    this.parcelaRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.parcelas=resp

      }
    )


  }
  findAllHaciendas(){
    this.haciendaRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.haciendas=resp

      }
    )


  }
  findAllUsuarios(){
    this.usuarioRestService.findAll().subscribe(
      resp =>{
        console.log(resp)
        this.usuarios=resp

      }
    )


  }


}
