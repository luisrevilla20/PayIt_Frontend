import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): Observable<User[]>{
    let users :User[] = [new User ('Luis', '123', 'luis@gmail.com', 500),
                         new User ('Simon', '123', 'simon@gmail.com', 500),
                         new User ('Julio', '123', 'julio@gmail.com', 500),]
    return of(users)
  }

  getMainUser(): Observable<User>{
    let user :User = new User ('Luis', '123', 'luis@gmail.com', 500);
    return of(user)
  }

  constructor() { }
}
