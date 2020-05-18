import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin/admin';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
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
