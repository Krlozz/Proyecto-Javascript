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
    // OBSERVABLE
    const razas$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Hacienda[]> r)); // Castear

    return razas$;
  }

  delete(id: number): Observable<Hacienda> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Hacienda> r)); // Castear
  }

  create(nombre: string,
         direccion: string,
         telefono: string): Observable<Hacienda> {

    const objetoAGuardar = {
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Hacienda> r)); // Castear
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


// epn.edu.ec -> 192.170.1.2

// CORS -> Navegador

// epn.edu.ec -> HTTP fbi.gov.us
//
//

// fbi.gov.us -> 192.220.1.5

// CORS -> Navegador














