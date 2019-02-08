import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class AutentificacionService {

  estaLogeadoUser: boolean = true
  estaLogeadoAdmin: boolean = true

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

}
