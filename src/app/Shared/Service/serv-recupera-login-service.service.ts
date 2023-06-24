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


}