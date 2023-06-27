import { Component } from '@angular/core';
import { HeaderService } from 'src/app/Shared/Service/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed: boolean = true;

  constructor(private headerService: HeaderService) { }

  get showHeader(): boolean {
    return this.headerService.getShowHeader();
  }
 

  closeNav() {
    this.isCollapsed = true;
  }
}