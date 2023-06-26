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

  authenticateUser(username: string, password: string): Observable<Login> {
    const loginRecordDto = { username, password };
    return this.http.post<Login>(`${this.apiUrl}/authenticate`, loginRecordDto);
  }

  SetLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

  getLogins(): Observable<Login[]> {
    return this.http.get<Login[]>(this.apiUrl);
  }

  getLoginById(id: string): Observable<Login> {
    return this.http.get<Login>(`${this.apiUrl}/${id}`);
  }

  updateLogin(id: string, updatedLogin: Login): Observable<Login> {
    return this.http.put<Login>(`${this.apiUrl}/${id}`, updatedLogin);
  }

  deleteLogin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
