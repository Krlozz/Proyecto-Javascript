import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { rolxUsuario } from '../interfaces/rolxUsuario.interface';

@Injectable()
export class CrearRolXUserRestService {

  nombreModelo = '/RolXUsuario';

  constructor(private readonly _httpClient: HttpClient) {   }

  create(rolxUsuario:any) {
    console.log(rolxUsuario, 'llegooo')
    // const objetoAGuardar = {
    //   idUsuario,
    //   idRol,
    // };

    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, rolxUsuario);
  }


  buscarRolxUsuario(idUsuario:number){

    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, {
        idUsuario
      })
      .pipe(map(r => r as rolxUsuario)); // Casteo
  }


  buscarTodos(){
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .get(url)
      .pipe(map(r => <rolxUsuario[]> r));
  }


}
