import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Subparcela} from '../interfaces/subparcela';
import {map} from 'rxjs/operators';

@Injectable()
export class SubparcelaRestService {

  nombreModelo = '/Subparcela';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Subparcela[]> {
    // OBSERVABLE
    const subparcela$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Subparcela[]> r)); // Castear

    return subparcela$;
  }

  delete(id: number): Observable<Subparcela> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Subparcela> r)); // Castear
  }

  create(codigo: any,
         medidas: any,
         idParcela:any

  ) {

    const objetoAGuardar = {
      codigoSubparcela: codigo,
      medidasSubparcela: medidas,

      idParcelaSubparcela:idParcela
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
    // .pipe(map(r => <Subparcela> r)); // Castear
  }

  findOneById(id: number | string): Observable<Subparcela> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Subparcela> r)); // Castear
  }

  updateOneById(subparcela: Subparcela) {

    const url = environment.url + this.nombreModelo
      + '/' + subparcela.id;

    return this._httpClient
      .put(url, subparcela)
      .pipe(map(r => <Subparcela> r)); // Castear

  }

}
