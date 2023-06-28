import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Shared/Service/HeadersControl/header-service.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit{


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setShowHeader(false); 
    this.headerService.setShowHeaderAdm(false);
    this.headerService.setShowheaderPerfilComponentshow(true);
 
  }

}