import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Model/Login';


@Injectable({
  providedIn: 'root'
})
export class ServLoginServiceService {
  private apiUrl = 'http://localhost:8080/api/Login';
  constructor(private http: HttpClient) { }

  SetLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

}
