import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class RegionRestService {

  nombreModelo = '/Region';

  constructor(private readonly _httpClient: HttpClient) {

  }

  findAll(): Observable<any[]> {
    const region$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <any[]> r)); //

    return region$;
  }

  delete(id: number): Observable<any> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <any> r)); // Castear
  }








}















