import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable()
export class RolRestService {

  constructor(private readonly _httpClient: HttpClient) {

  }


  obtnerRoles() {

    const url = environment.url + '/rol';

    return this._httpClient.get(url);
  }


}


