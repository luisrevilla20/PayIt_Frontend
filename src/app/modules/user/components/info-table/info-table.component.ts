import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactions/transaction';
import { TransactionService } from '../../services/transactions/transaction.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  transactions: Transaction[];
  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(){
    this.transactionService.getTransactions().subscribe(transactions =>{
      this.transactions = transactions;
    });
  }

}
