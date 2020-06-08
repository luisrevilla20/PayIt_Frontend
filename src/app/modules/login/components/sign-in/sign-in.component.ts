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
    this.signService.createToken().subscribe(user =>{});
  }

  createUser(){
    this.signService.createUser();
  }
}
