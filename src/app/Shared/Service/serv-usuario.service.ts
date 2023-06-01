import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServUsuarioService {

  
  apiUrl = 'http//localhost:8080/constructor/api/usuario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };

  constructor(
    private httpClient : HttpClientModule
  ) { }
}
