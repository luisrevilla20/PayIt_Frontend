import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin/admin';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	admin: Admin;

	constructor(public adminService:AdminService) { }
  
	ngOnInit(): void {
		this.getAdmin();
	}
  
	getAdmin(){
	  this.adminService.getAdmin().subscribe(admin =>{
		this.admin = admin;
	  });
	  }
}
