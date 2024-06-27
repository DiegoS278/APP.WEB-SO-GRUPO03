import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/api/v1'
  constructor(private http: HttpClient) { }

  createAccount(user: any): Observable<any>{
    return this.http.post<any>(this.apiUrl + '/user', user);
  }

  login(user: any): Observable<any>{
    return this.http.post<any>(this.apiUrl + '/sign-in', user);
  }
}
