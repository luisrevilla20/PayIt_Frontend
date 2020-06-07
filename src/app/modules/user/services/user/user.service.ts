import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../models/user/user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'https://a37135c55a90.ngrok.io/';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  user: User;

  getUser(): Observable <any>{
     /*this.user = this.http.get(this.endpoint + '91ce84db-7cf4-4625-806e-7a9bf94f5ef9').pipe(
      map(this.extractData)); */
     return this.http.get(this.endpoint + 'user/' + '91ce84db-7cf4-4625-806e-7a9bf94f5ef9').pipe(
        map(this.extractData));
    //return of (this.user);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {}; 
  }

  constructor(private http: HttpClient) { }
}
