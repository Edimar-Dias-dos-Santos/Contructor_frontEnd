import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CliFornec } from '../Model/CliFornec'; // Substitua 'caminho-para-o-seu-interface' pelo caminho correto para o seu arquivo de interface

@Injectable({
  providedIn: 'root'
})
export class ServClifonecService {
  private baseUrl = 'http://localhost:8080/api/CliFornec';

  constructor(private http: HttpClient) {}

  saveCliFornec(cliFornec: CliFornec): Observable<CliFornec> {
    return this.http.post<CliFornec>(this.baseUrl, cliFornec);
  }

  getCliFornecs(): Observable<CliFornec[]> {
    return this.http.get<CliFornec[]>(this.baseUrl);
  }

  getCliFornecById(id: string): Observable<CliFornec> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CliFornec>(url);
  }

  updateCliFornec(id: string, cliFornec: CliFornec): Observable<CliFornec> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<CliFornec>(url, cliFornec);
  }

  deleteCliFornec(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}