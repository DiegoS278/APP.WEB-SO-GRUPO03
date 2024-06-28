import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:9000/api/v1'
  constructor(private http: HttpClient) { }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transaction`, transaction);
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/transactions/user/${id}`);
  }
}
