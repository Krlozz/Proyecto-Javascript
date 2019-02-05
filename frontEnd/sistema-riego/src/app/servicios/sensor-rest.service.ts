import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Sensor} from '../interfaces/sensor';
import {map} from 'rxjs/operators';

@Injectable()
export class SensorRestService {

  nombreModelo = '/Sensor';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Sensor[]> {
    // OBSERVABLE
    const sensor$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Sensor[]> r)); // Castear

    return sensor$;
  }

  delete(id: number): Observable<Sensor> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Sensor> r)); // Castear
  }

  create(codigo: any) {


    const objetoAGuardar = {
      codigoSensor: codigo
    };

    const url = environment.url + this.nombreModelo;
    console.log(url)
    return this._httpClient
      .post(url, objetoAGuardar)
    //.pipe(map(r => <Sensor> r)); // Castear

  }

  findOneById(id: number | string): Observable<Sensor> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Sensor> r)); // Castear
  }

  updateOneById(sensor: Sensor) {

    const url = environment.url + this.nombreModelo
      + '/' + sensor.id;

    return this._httpClient
      .put(url, sensor)
      .pipe(map(r => <Sensor> r)); // Castear

  }


}


// epn.edu.ec -> 192.170.1.2

// CORS -> Navegador

// epn.edu.ec -> HTTP fbi.gov.us
//
//

// fbi.gov.us -> 192.220.1.5

// CORS -> Navegador














