import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServUsuario {

  private apiUrl = 'http://localhost:8080/api/Usuario';

  usuarioAtual: Usuario | null = null;

  constructor(private http: HttpClient) { }

  // Obter todos os usuários
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Obter um usuário pelo ID
  getUsuario(id: string): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  // Adicionar um novo usuário
  setUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Atualizar um usuário
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  // Excluir um usuário
  deleteUsuario(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  setUsuarioAtual(usuario: Usuario) {
    this.usuarioAtual = usuario;
  }
}