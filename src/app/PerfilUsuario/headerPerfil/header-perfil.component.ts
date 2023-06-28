import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/Shared/Service/HeadersControl/header-service.service';

@Component({
  selector: 'app-header-Perfil',
  templateUrl: './header-perfil.component.html',
  styleUrls: ['headerPerfil.scss']
})
export class headerPerfilComponent {

  constructor(
    private router: Router, private headerService: HeaderService
  ) { }


  limparCacheContextoERefresh(): void {
   
    this.headerService.setShowHeader(true);
    this.headerService.setShowheaderPerfilComponentshow(false);
    this.headerService.setShowHeaderAdm(false);
    this.router.navigateByUrl('/');

  }
  
  limparCache(): void {
    localStorage.clear(); 
  }
  
  fazerRefresh(): void {
    location.reload(); 
  }
}