import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  user: any;

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    const token = localStorage.getItem('tokenAuth');
    const userL = JSON.parse(localStorage.getItem('user'));
    return this.http.get<any>(`https://a37135c55a90.ngrok.io/user/${userL.user.id}`,{
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${token}`)
    }).subscribe(data => {
      console.log(data);
    });
  }
}
