import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showHeader: boolean = true;
  private showHeaderAdm: boolean = false;
  private showheaderPerfilComponent : boolean= false;

  getShowHeader(): boolean {
    return this.showHeader;
  }


  getShowHeaderAdm(): boolean {
    return this.showHeaderAdm;
  }

  getShowheaderPerfilComponent(): boolean{
      return this.showheaderPerfilComponent;
  }

  setShowHeader(show: boolean): void {
    this.showHeader = show;
  }

  setShowHeaderAdm(show: boolean): void {
    this.showHeaderAdm = show;
  }

  setShowheaderPerfilComponentshow(show: boolean): void{
        this.showheaderPerfilComponent = show;
  }


}