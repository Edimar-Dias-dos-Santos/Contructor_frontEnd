import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPerfilImg } from '../Model/UsuarioPerfilImg';

@Injectable({
  providedIn: 'root'
})
export class ServUsuarioPerfilImgService {
  private apiUrl = 'http://localhost:8080/api/usuario-perfil-img'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) { }



  uploadUserProfileImage(idUsuario: string, image: File): Observable<UsuarioPerfilImg> {
    const formData = new FormData();
    formData.append('image', image);

    const url = `${this.apiUrl}/${idUsuario}`;
    return this.http.post<UsuarioPerfilImg>(url, formData);
  }

 
  updateUserProfileImage(idUsuarioPerfilImg: string, image: File): Observable<UsuarioPerfilImg> {
    const formData = new FormData();
    formData.append('image', image);

    const url = `${this.apiUrl}/${idUsuarioPerfilImg}`;
    return this.http.put<UsuarioPerfilImg>(url, formData);
  }

 
  deleteUserProfileImage(idUsuarioPerfilImg: string): Observable<void> {
    const url = `${this.apiUrl}/${idUsuarioPerfilImg}`;
    return this.http.delete<void>(url);
  }


  getUserProfileImage(idUsuarioPerfilImg: string): Observable<UsuarioPerfilImg> {
    const url = `${this.apiUrl}/${idUsuarioPerfilImg}`;
    return this.http.get<UsuarioPerfilImg>(url);
  }
}