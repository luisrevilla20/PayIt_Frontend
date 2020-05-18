import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	user: User;

  constructor(public userService:UserService, private router: Router) { }

  ngOnInit(): void {
	  this.getUser();
  }

  getUser(){
    this.userService.getMainUser().subscribe(user =>{
      this.user = user;
	});
  }
  
   

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }

}
