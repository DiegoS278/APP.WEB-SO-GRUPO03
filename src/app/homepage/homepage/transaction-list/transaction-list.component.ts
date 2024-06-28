import {Component, OnInit} from '@angular/core';
import {TransactionService} from "./service/transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {
    constructor(private transactionService: TransactionService) {
    }
  displayedColumns: string[] = ['amount', 'currency', 'transactionDate', 'type', 'status', 'fromAccount', 'toAccount', 'description'];
    transactions!: any[];
    ngOnInit(): void {
        let userId = String(localStorage.getItem('userId'));
        this.transactionService.getTransactionById(userId).subscribe((transactions: any[]) => {
          this.transactions = transactions;
          console.log("transactions: " + this.transactions);
        });
    }

}
