
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Usuario} from '../../interfaces/usuario';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  usuario: any = {
    rolesUsuarios: [],
    parcelas: [],
    createdAt: 1549457490856,
    updatedAt: 1549457490856,
    id: 1,
    nombreUsuario: 'Carlos',
    cedulaUsuario: '12345',
    password: '1234',
    direccionUsuario: 'fgdfg',
    telefonoUsuario: '0554',
    idHacienda: null
  };

  constructor(private readonly _httpClient: HttpClient) {

  }

  login(cedulaUsuario: string,
        password: string
        
        ): Observable<Usuario> {

    const url = environment.url + '/usuario/Login';
    const  urlMaster = url+'?cedulaUsuario='+cedulaUsuario+'&password='+password;
    console.log(urlMaster)

    return this._httpClient
      .get(url+'?cedulaUsuario='+cedulaUsuario+'&password='+password)
      .pipe(map(r => r as Usuario)); // Casteo

  }

  findById(id:number): Observable<Usuario> {

const url = environment.url + '/usuario';

return this._httpClient
  .get(url+'/'+id)
  .pipe(map(r => r as Usuario)); // Casteo

}


}














