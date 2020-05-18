import { Injectable } from '@angular/core';
import { Transaction } from '../../../user/models/transactions/transaction';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  getTransactions(): Observable<Transaction[]>{
    let transactions :Transaction[] = [new Transaction ('Envío', 100, 'Luis', 'Julio'),
                         new Transaction ('Retiro', 100, 'Luis', 'Luis'),
                         new Transaction ('Deposito', 200, 'Luis', 'Simon'),]
    return of(transactions)
  }

  constructor() { }
}
