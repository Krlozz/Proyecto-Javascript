import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CrearRolXUserRestService {

  nombreModelo = '/RolXUsuario';

  constructor(private readonly _httpClient: HttpClient) {   }

  create(rolxUsuario:any) {

    // const objetoAGuardar = {
    //   idUsuario,
    //   idRol,
    // };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, rolxUsuario);
  }


}
