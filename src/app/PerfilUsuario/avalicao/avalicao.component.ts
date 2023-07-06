import { Component, OnInit } from '@angular/core';
import { ServiceAvaliacaoService } from 'src/app/Shared/Service/service-avalicao.service';
import { Avaliacao } from 'src/app/Shared/Model/Avaliacao';

@Component({
  selector: 'app-avalicao',
  templateUrl: './avalicao.component.html',
  styleUrls: ['./avalicao.component.scss']
})
export class AvalicaoComponent implements OnInit {
  avaliacoes: Avaliacao[] = [];

  constructor(private avaliacaoService: ServiceAvaliacaoService) {}

  ngOnInit() {
    this.carregarAvaliacoes();
  }

  carregarAvaliacoes() {
    this.avaliacaoService.getAllAvaliacoes().subscribe(
      (data: Avaliacao[]) => {
        this.avaliacoes = data;
      },
      (error) => {
        console.error('Erro ao carregar avaliações:', error);
      }
    );
  }

  deletarAvaliacao(id: string) {
    this.avaliacaoService.deleteAvaliacao(id).subscribe(
      () => {
        // Atualiza a lista de avaliações após a exclusão
        this.carregarAvaliacoes();
      },
      (error) => {
        console.error('Erro ao deletar avaliação:', error);
      }
    );
  }
}