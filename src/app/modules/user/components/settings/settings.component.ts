import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: User;
  
  username = new FormGroup(
    {username: new FormControl('', Validators.required)
  });
  email = new FormGroup(
    {email: new FormControl('', [Validators.required, Validators.email])
  });
  password = new FormGroup({
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  });

	constructor(public userService:UserService) { }
  
	ngOnInit(): void {
		this.getUser();
	}
  
	getUser(){
	  this.userService.getUser().subscribe(user =>{
		this.user = user;
	  });
    }
    
  changeUsername(newname: string){
    this.username.setValue([this.user.username = newname])
  }
}
