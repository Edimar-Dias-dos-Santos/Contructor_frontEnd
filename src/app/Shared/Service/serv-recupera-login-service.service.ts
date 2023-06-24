import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecuperaLogin } from '../Model/RecuperaLogin';

@Injectable({
  providedIn: 'root'
})
export class ServRecuperaLoginService {
  private apiUrl = 'http://localhost:8080/api/RecuperaLogin';

  constructor(private http: HttpClient) { }

  setRecuperaLogin(recuperaLogin: RecuperaLogin): Observable<RecuperaLogin> {
    return this.http.post<RecuperaLogin>(this.apiUrl, recuperaLogin);
  }

  getRecuperaLogins(): Observable<RecuperaLogin[]> {
    return this.http.get<RecuperaLogin[]>(this.apiUrl);
  }

  getRecuperaLogin(id: string): Observable<RecuperaLogin> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RecuperaLogin>(url);
  }

  updateRecuperaLogin(recuperaLogin: RecuperaLogin): Observable<RecuperaLogin> {
    const url = `${this.apiUrl}/${recuperaLogin.id}`;
    return this.http.put<RecuperaLogin>(url, recuperaLogin);
  }

  deleteRecuperaLogin(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}