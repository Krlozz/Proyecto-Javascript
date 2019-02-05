import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Hacienda} from '../interfaces/hacienda';
import {map} from 'rxjs/operators';

@Injectable()
export class HaciendaRestService {

  nombreModelo = '/Hacienda';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Hacienda[]> {
    const hacienda$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Hacienda[]> r)); // Castear

    return hacienda$;
  }

  delete(id: number): Observable<Hacienda> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Hacienda> r)); // Castear
  }

  create(nombre: any,
         direccion: any,
         telefono: any,
         idRegion: any) {


    const objetoAGuardar = {
      nombreHacienda: nombre,
      direccionHacienda: direccion,
      telefonoHacienda: telefono,
      idRegionHacienda:idRegion
    };

    const url = environment.url + this.nombreModelo;
console.log(url)
    return this._httpClient
      .post(url, objetoAGuardar)
       //.pipe(map(r => <Hacienda> r)); // Castear

  }

  findOneById(id: number | string): Observable<Hacienda> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Hacienda> r)); // Castear
  }

  updateOneById(hacienda: Hacienda) {

    const url = environment.url + this.nombreModelo
      + '/' + hacienda.id;

    return this._httpClient
      .put(url, hacienda)
      .pipe(map(r => <Hacienda> r)); // Castear

  }


}















