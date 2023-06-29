import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioServImg } from '../Model/UsuarioServImg';

@Injectable({
  providedIn: 'root'
})
export class ServUsuarioServImgService {
  private apiUrl = 'http://localhost:8080/api/UsuarioServImg';

  constructor(private http: HttpClient) {}

  saveUsuarioServImg(idCliFornec: string, image: File): Observable<UsuarioServImg> {
    const formData = new FormData();
    formData.append('imageFile', image);

    const url = `${this.apiUrl}/${idCliFornec}/image`;
    return this.http.post<UsuarioServImg>(url, formData);
  }

  getUsuarioServImgs(): Observable<UsuarioServImg[]> {
    return this.http.get<UsuarioServImg[]>(this.apiUrl);
  }

  getUsuarioServImgById(id: string): Observable<UsuarioServImg> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UsuarioServImg>(url);
  }

  updateUsuarioServImg(id: string, usuarioServImg: UsuarioServImg): Observable<UsuarioServImg> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<UsuarioServImg>(url, usuarioServImg);
  }

  deleteUsuarioServImg(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}