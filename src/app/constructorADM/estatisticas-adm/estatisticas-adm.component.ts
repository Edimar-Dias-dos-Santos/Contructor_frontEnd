import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas-adm',
  templateUrl: './estatisticas-adm.component.html',
  styleUrls: ['./estatisticas-adm.component.scss']
})
export class EstatisticasADMComponent implements OnInit {
  meta: number = 1000; // Defina a meta de usuários
  atual: number = 750; // Defina o valor atual de usuários
  difference!: number;
  metaBarHeight!: string;
  atualBarHeight!: string;
  diferencaBarHeight!: string;

  ngOnInit() {
    this.difference = this.meta - this.atual;
    this.metaBarHeight = (this.meta / this.meta * 100) + '%';
    this.atualBarHeight = (this.atual / this.meta * 100) + '%';
    this.diferencaBarHeight = (this.difference / this.meta * 100) + '%';
  }
}