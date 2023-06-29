import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SugestaoAdm } from '../Model/SugestaoAdm';

@Injectable({
  providedIn: 'root'
})
export class ServSugestaoAdmService {

  private baseUrl = 'http://localhost:8080/api/SugestaoAdm'; // Substitua pela URL correta

  constructor(private http: HttpClient) { }

  criarSugestaoAdm(sugestaoAdm: SugestaoAdm): Observable<SugestaoAdm> {
    return this.http.post<SugestaoAdm>(`${this.baseUrl}`, sugestaoAdm);
  }

  getAllSugestaoAdm(): Observable<SugestaoAdm[]> {
    return this.http.get<SugestaoAdm[]>(`${this.baseUrl}`);
  }

  getSugestaoAdmById(id: string): Observable<SugestaoAdm> {
    return this.http.get<SugestaoAdm>(`${this.baseUrl}/${id}`);
  }

  updateSugestaoAdm(id: string, sugestaoAdm: SugestaoAdm): Observable<SugestaoAdm> {
    return this.http.put<SugestaoAdm>(`${this.baseUrl}/${id}`, sugestaoAdm);
  }

  deleteSugestaoAdm(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}