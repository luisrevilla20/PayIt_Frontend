import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactions/transaction';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  transactions: Transaction[];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    //this.getTransactions();
  }
/*
  getTransactions(){
    this.userService.getTransactions().subscribe(transactions =>{
      this.transactions = transactions;
    });
  }*/

}
