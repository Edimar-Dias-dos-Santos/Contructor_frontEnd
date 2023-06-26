import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginConstructoAdm } from '../Model/LoginConstructoAdm';

@Injectable({
  providedIn: 'root'
})
export class ServLoginConstructoAdmService {
  private baseUrl = 'http://localhost:8080/api/LoginConstructoAdm';

  constructor(private http: HttpClient) { }

  authenticateUser(username: string, password: string): Observable<LoginConstructoAdm> {
    const body = { username, password };
    return this.http.post<LoginConstructoAdm>(`${this.baseUrl}/authenticate`, body);
  }

  saveLogin(login: LoginConstructoAdm): Observable<LoginConstructoAdm> {
    return this.http.post<LoginConstructoAdm>(this.baseUrl, login);
  }

  getAllLogins(): Observable<LoginConstructoAdm[]> {
    return this.http.get<LoginConstructoAdm[]>(this.baseUrl);
  }

  getLoginById(id: string): Observable<LoginConstructoAdm> {
    return this.http.get<LoginConstructoAdm>(`${this.baseUrl}/${id}`);
  }

  updateLogin(id: string, updatedLogin: LoginConstructoAdm): Observable<LoginConstructoAdm> {
    return this.http.put<LoginConstructoAdm>(`${this.baseUrl}/${id}`, updatedLogin);
  }

  deleteLogin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}