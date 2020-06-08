import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactions/transaction';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  transactions: Transaction[];
  constructor() { }

  ngOnInit(): void {
  }
}
