import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from '../Model/Avaliacao';

@Injectable({
  providedIn: 'root'
})
export class ServiceAvaliacaoService {

  private apiUrl = '/api/avaliacoes'; // Defina a URL do seu endpoint

  constructor(private http: HttpClient) { }

  getAllAvaliacoes(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(this.apiUrl);
  }

  getAvaliacaoById(id: string): Observable<Avaliacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Avaliacao>(url);
  }

  createAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(this.apiUrl, avaliacao);
  }

  updateAvaliacao(id: string, avaliacao: Avaliacao): Observable<Avaliacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Avaliacao>(url, avaliacao);
  }

  deleteAvaliacao(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}