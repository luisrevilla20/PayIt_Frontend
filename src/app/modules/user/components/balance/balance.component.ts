import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
	user: User;

	constructor(public userService:UserService) { }
  
	ngOnInit(): void {
		this.getUser();
	}
	
	

	getUser(){
	  this.userService.getUser().subscribe(user =>{
		this.user.balance = user;
	  });
	  }

}
