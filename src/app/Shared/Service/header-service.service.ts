import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showHeader: boolean = true;
  private showHeaderAdm: boolean = false;

  setShowHeader(show: boolean): void {
    this.showHeader = show;
  }

  getShowHeader(): boolean {
    return this.showHeader;
  }


  setShowHeaderAdm(show: boolean): void {
    this.showHeaderAdm = show;
  }

  getShowHeaderAdm(): boolean {
    return this.showHeaderAdm;
  }


}