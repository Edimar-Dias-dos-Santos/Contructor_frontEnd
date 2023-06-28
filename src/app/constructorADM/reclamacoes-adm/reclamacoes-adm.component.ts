import { Component, OnInit } from '@angular/core';
import { ServSugestaoAdmService } from 'src/app/Shared/Service/serv-sugestao-adm.service';
import { SugestaoAdm } from 'src/app/Shared/Model/SugestaoAdm';

@Component({
  selector: 'app-reclamacoes-adm',
  templateUrl: './reclamacoes-adm.component.html',
  styleUrls: ['./reclamacoes-adm.component.scss']
})
export class ReclamacoesADMComponent implements OnInit {
  sugestoes: SugestaoAdm[] = []; // Initialize sugestoes as an empty array

  constructor(private sugestaoAdmService: ServSugestaoAdmService) { }

  ngOnInit() {
    this.getAllSugestoesAdm();
  }

  getAllSugestoesAdm() {
    this.sugestaoAdmService.getAllSugestaoAdm().subscribe(
      sugestoes => {
        this.sugestoes = sugestoes;
      },
      error => {
        // Handle error
      }
    );
  }

  criarSugestaoAdm(sugestaoAdm: SugestaoAdm) {
    this.sugestaoAdmService.criarSugestaoAdm(sugestaoAdm).subscribe(
      novaSugestao => {
        // Handle success
      },
      error => {
        // Handle error
      }
    );
  }

  getSugestaoAdmById(id: string) {
    this.sugestaoAdmService.getSugestaoAdmById(id).subscribe(
      sugestao => {
        // Handle success
      },
      error => {
        // Handle error
      }
    );
  }

  updateSugestaoAdm(id: string, sugestaoAdm: SugestaoAdm) {
    this.sugestaoAdmService.updateSugestaoAdm(id, sugestaoAdm).subscribe(
      sugestaoAtualizada => {
        // Sugestão administrativa atualizada com sucesso
        // Faça o que precisar com a sugestão atualizada
      },
      error => {
        // Trate o erro, se necessário
      }
    );
  }

  deleteSugestaoAdm(id: string) {
    this.sugestaoAdmService.deleteSugestaoAdm(id).subscribe(
      () => {
        // Sugestão administrativa excluída com sucesso
        // Faça o que precisar após excluir a sugestão
      },
      error => {
        // Trate o erro, se necessário
      }
    );
  }
}