import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServUsuario {

  apiUrl = 'http://localhost:8080/constructor/api/usuario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsuarios(flag: string): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.apiUrl}?flag=${flag}`);
  }
}