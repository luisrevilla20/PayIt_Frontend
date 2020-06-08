import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  user: User;

  constructor(
    public userService:UserService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.user;
  }
}
