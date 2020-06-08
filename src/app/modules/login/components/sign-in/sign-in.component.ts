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
  //user.value, email.value, pass.value , pass2.value 
  /*
  createUser(username: any, email: any, pass: any , pass2: any){
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' , username)
  this.createToken();
	this.signService.createUser(this.user, username, email, pass);
	console.log(this.user);
  }*/


  createUser(username: any, email: any, pass: any , pass2: any){
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' , username);
    this.createToken();
    this.signService.createUser(this.user, username, email, pass);
  }
  
}
