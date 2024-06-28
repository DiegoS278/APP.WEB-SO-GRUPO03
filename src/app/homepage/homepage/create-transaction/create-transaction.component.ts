import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {TransactionService} from "../transaction-list/service/transaction.service";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.css'
})
export class CreateTransactionComponent {
  transaction = {
    userId: '',
    amount: '',
    currency: '',
    type: '',
    status: 'pendiente',
    details: {
      fromAccount: '',
      toAccount: '',
      description: '',
    },
  };

  constructor(public dialogRef: MatDialogRef<CreateTransactionComponent>, public transactionService: TransactionService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTransaction(): void {
    let userID = String(localStorage.getItem('userId'));
    this.transaction.userId = userID;
    this.transaction.details.fromAccount = userID;
    this.transactionService.createTransaction(this.transaction).subscribe(
      response => {
        console.log(response);
        this.dialogRef.close();
      },
      error => {
        console.error(error);
      }
    );
  }
}
