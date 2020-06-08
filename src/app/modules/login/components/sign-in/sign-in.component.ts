import { Component, OnInit } from '@angular/core';
import { SignService} from '../../services/sign/sign.service';
import { User } from '../../../user/models/user/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public signService:SignService) { }

  ngOnInit(): void {
  }

  user: User = {};

  createToken(){
	this.signService.createToken().subscribe(user =>{this.user.session = user.token});
	console.log(this.user);
  }

  createUser(){
	this.createToken();
	this.signService.createUser(this.user, this.user.username, this.user.email, this.user.password);
	console.log(this.user);
  }
}
