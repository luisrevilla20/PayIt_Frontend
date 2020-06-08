import { Component, OnInit } from '@angular/core';
import { SignService} from '../../services/sign/sign.service';
import { User } from '../../../user/models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public confirm: string;
  public name: string;
  public mail: string;
  public pass: string;

  constructor(
    public signService:SignService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  user: User = {};

  createUser(){
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    this.signService.createToken().subscribe(user => {
      this.user.session = user.token;
      this.signService.createUser({
        email: this.mail,
        user_name: this.name,
        password: this.pass
      }, this.user).subscribe(
        data => {
          this.router.navigate(['/LogIn/Log']);
        },
        error => console.error(error));
    });
  }

}
