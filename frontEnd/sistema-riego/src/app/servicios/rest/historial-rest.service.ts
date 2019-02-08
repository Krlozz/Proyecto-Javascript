import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Lectura} from '../../interfaces/lectura';
import {map} from 'rxjs/operators';

@Injectable()
export class LecturaRestService {

  nombreModelo = '/Lectura';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Lectura[]> {
    const hacienda$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => r as Lectura[])); // Castear

    return hacienda$;
  }

  delete(id: number): Observable<Lectura> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => r as Lectura)); // Castear
  }

  create(fecha: any,
         lectura: any,

         idSensor: any) {


    const objetoAGuardar = {
      fechaLectura: fecha,
      descripcionLectura: lectura,
      idSensorLectura: idSensor
    };

    const url = environment.url + this.nombreModelo;
    console.log(url);
    return this._httpClient
      .post(url, objetoAGuardar);
    // .pipe(map(r => <Hacienda> r)); // Castear

  }

  findOneById(id: number | string): Observable<Lectura> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => r as Lectura)); // Castear
  }

  updateOneById(lectura: Lectura) {

    const url = environment.url + this.nombreModelo
      + '/' + lectura.id;

    return this._httpClient
      .put(url, lectura)
      .pipe(map(r => r as Lectura)); // Castear

  }

  prenderPost(datosLED:any){
    // http://localhost:1337/Lectura/controlLed
    console.log(datosLED)
    const  url = 'http://localhost:1337/Lectura/controlLed'
      // const url = environment.url + this.nombreModelo
      //   + '/' + 'controlLed';

    return this._httpClient
      .post(url, datosLED)
  }


}















