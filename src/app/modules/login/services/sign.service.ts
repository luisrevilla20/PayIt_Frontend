import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../../modules/user/models/user/user';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SignService {

  endpoint = 'https://a37135c55a90.ngrok.io/';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  user: User;

  createToken(): Observable <any>{
    const body = new HttpParams()
    .set('grant_type', 'client_credentials')
    .set('scope', 'openid')
    .set('client_id', 'shopper-manager-br')
    .set('client_secret', '3c9c8b7e-1318-4e66-a6bd-2549a846a3dc')

  return this.http.post('https://auth.rappipay.com/auth/realms/dev/protocol/openid-connect/token',
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    );
  }

  private extractData(res: Response) {
    let body = res;
    console.log(res)
    return body || {}; 
  }

  constructor(private http: HttpClient) { }
}
