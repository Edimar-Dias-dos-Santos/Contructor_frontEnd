import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userEmail: string = '';
  private idUsuario: string = '';

  constructor() { }

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  setidUsuario(id: string)
  {
    this.idUsuario = id;
  }

  getidUsuario(): string{
    return this.idUsuario;
  }
}






