import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showHeader: boolean = true;

  setShowHeader(show: boolean): void {
    this.showHeader = show;
  }

  getShowHeader(): boolean {
    return this.showHeader;
  }
}