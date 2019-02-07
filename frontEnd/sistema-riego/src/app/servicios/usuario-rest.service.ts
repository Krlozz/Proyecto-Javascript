import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Usuario} from '../interfaces/usuario';
import {map} from 'rxjs/operators';

@Injectable()
export class UsuarioRestService {

  nombreModelo = '/Usuario';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<Usuario[]> {
    // OBSERVABLE
    const usuario$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => r as Usuario[])); // Castear

    return usuario$;
  }

  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map((r) => r as Usuario));  // Castear
  }

  create(nombre: any,
         cedula: any,
         direccion: any,
         telefono: any,
         password: any,
         idHacienda: any
  ) {


    const objetoAGuardar = {
      nombreUsuario: nombre,
      cedulaUsuario: cedula,
      direccionUsuario: direccion,
      telefonoUsuario: telefono,
      password,
      idHacienda
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar);
      // .pipe(map(r => <Usuario> r)); // Castear
  }
  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map((r) => r as Usuario));  // Castear
  }

  updateOneById(usuario: Usuario, idUsuario: number) {

    console.log(usuario, 'alooooo', idUsuario);
    const url = environment.url + this.nombreModelo
      + '/' + idUsuario;
    return this._httpClient
      .put(url, usuario)
      .pipe(map((r) => r as Usuario));  // Castear
  }


}














