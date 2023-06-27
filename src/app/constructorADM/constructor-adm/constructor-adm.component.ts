import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Shared/Service/header-service.service';

@Component({
  selector: 'app-constructor-adm',
  templateUrl: './constructor-adm.component.html',
  styleUrls: ['./constructor-adm.component.scss']
})
export class ConstructorADMComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setShowHeader(false); // Oculta o cabeçalho
    this.headerService.setShowHeaderAdm(true);
  }

}