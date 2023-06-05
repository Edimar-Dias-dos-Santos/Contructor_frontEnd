import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userEmail: string = '';

  constructor() { }

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
}






