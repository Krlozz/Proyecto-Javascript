import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {AutentificacionService} from "./autentificacion.service";


@Injectable()
export class EstaLogeadoAdminGuards implements CanActivate {

  constructor(
    private readonly _autentificacionService: AutentificacionService,
    private readonly _router: Router
    ) {
  }

  canActivate(): boolean {
    if (this._autentificacionService.estaLogeadoAdmin) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

  // canActivate(parametroRuta: ActivatedRouteSnapshot) {
  //
  //   return this._autentificacionService.estaLogeadoAdmin;
  // }

}
