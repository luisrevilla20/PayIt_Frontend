import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../../user/models/user/user';
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

  return this.http.post(this.endpoint + 'auth',
    {
      headers: new HttpHeaders()
        .set('api_key', 'payitMobile')
        .set('api_secret', 'b60f1f850675496f9fff95b95c28cecd')
    }
    );
  }

  createUser(): Observable <any>{
    return 
  }

  private extractData(res: Response) {
    let body = res;
    console.log(res)
    return body || {}; 
  }

  constructor(private http: HttpClient) { }
}
