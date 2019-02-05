import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Parcela} from '../interfaces/parcela';
import {map} from 'rxjs/operators';

@Injectable()
export class ParcelaRestService {

  nombreModelo = '/Parcela';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Parcela[]> {
    // OBSERVABLE
    const parcela$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Parcela[]> r)); // Castear

    return parcela$;
  }

  delete(id: number): Observable<Parcela> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Parcela> r)); // Castear
  }

  create(codigo: any,
         medidas: any

  ) {

    const objetoAGuardar = {
      codigoParcela: codigo,
      medidasParcela: medidas

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
     // .pipe(map(r => <Parcela> r)); // Castear
  }

  findOneById(id: number | string): Observable<Parcela> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Parcela> r)); // Castear
  }

  updateOneById(parcela: Parcela) {

    const url = environment.url + this.nombreModelo
      + '/' + parcela.id;

    return this._httpClient
      .put(url, parcela)
      .pipe(map(r => <Parcela> r)); // Castear

  }

}
