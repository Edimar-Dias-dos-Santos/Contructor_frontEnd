import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-Perfil',
  templateUrl: './header-perfil.component.html',
  styleUrls: ['headerPerfil.scss']
})
export class headerPerfilComponent {

  constructor(
    private router: Router
  ) { }


  limparCacheContextoERefresh(): void {
    this.limparCache();
    this.fazerRefresh();
  }
  
  limparCache(): void {
    localStorage.clear(); 
  }
  
  fazerRefresh(): void {
    location.reload(); 
  }
}