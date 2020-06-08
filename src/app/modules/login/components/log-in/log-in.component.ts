import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LogService} from './../../services/log/log.services';
import { User } from '../../../user/models/user/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public logService:LogService, private router: Router) { }

  ngOnInit(): void {
  }

  user: User = {};

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }

  getUser(){
    this.logService.getUser().subscribe(user =>{
      this.user = user;
	});
  }

}
