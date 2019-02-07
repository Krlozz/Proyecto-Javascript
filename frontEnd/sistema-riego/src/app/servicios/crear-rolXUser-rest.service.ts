import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class CrearRolXUserRestService {

  constructor(private readonly _httpClient: HttpClient) {   }

  create(idUsuario: any,
         idRol: any,

  ) {

    const objetoAGuardar = {
      codigoParcela: codigo,
      medidasParcela: medidas,
      idHaciendaParcela:idHacienda,
      idUsuarioParcela:idUsuario

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
    // .pipe(map(r => <Parcela> r)); // Castear
  }


}
