import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {AutentificacionService} from "./autentificacion.service";


@Injectable()
export class EstaLogeadoAdminGuards implements CanActivate {

  constructor(
    private readonly _autentificacionService: AutentificacionService) {
  }

  canActivate(parametroRuta: ActivatedRouteSnapshot) {

    return this._autentificacionService.estaLogeadoAdmin;
  }

}
