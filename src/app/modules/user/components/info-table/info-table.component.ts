import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactions/transaction';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  transactions: Transaction[];
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.transactions = this.auth.user.transactions;
  }
}
