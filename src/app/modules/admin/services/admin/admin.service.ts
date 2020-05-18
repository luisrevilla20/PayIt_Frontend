import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Admin } from '../../models/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
	getAdmin(): Observable<Admin>{
		let admin :Admin = new Admin ('Admin Simon', 100000);
		return of(admin)
	  }

  constructor() { }
}
