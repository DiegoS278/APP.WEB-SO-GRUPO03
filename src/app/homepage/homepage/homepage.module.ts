import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@NgModule({
  declarations: [
    HomepageComponent,
    TransactionListComponent,
    CreateTransactionComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    HttpClientModule,
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatButton,
    FormsModule,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ]
})
export class HomepageModule { }
