import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClifornecServico } from '../Model/ClifornecServico';

@Injectable({
  providedIn: 'root'
})
export class ServCliFornecServService {
  private baseUrl = 'http://localhost:8080/api/CliFornecServico';

  constructor(private http: HttpClient) {}

  public saveCliFornecServico(cliFornecServico: ClifornecServico): Observable<ClifornecServico> {
    return this.http.post<ClifornecServico>(this.baseUrl, cliFornecServico);
  }

  public getCliFornecServicos(): Observable<ClifornecServico[]> {
    return this.http.get<ClifornecServico[]>(this.baseUrl);
  }

  public getCliFornecServicoById(id: string): Observable<ClifornecServico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ClifornecServico>(url);
  }

  public updateCliFornecServico(id: string, cliFornecServico: ClifornecServico): Observable<ClifornecServico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<ClifornecServico>(url, cliFornecServico);
  }

  public deleteCliFornecServico(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}