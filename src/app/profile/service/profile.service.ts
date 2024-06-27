import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:9000/api/v1'
  constructor(private http: HttpClient) { }

  updateProfile(id: string,user: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/user/${id}`, user);
  }

  getProfileById(id: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }

}
