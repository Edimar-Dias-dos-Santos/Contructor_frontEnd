import { Component, OnInit } from '@angular/core';
import { ServSugestaoAdmService } from 'src/app/Shared/Service/serv-sugestao-adm.service';
import { SugestaoAdm } from 'src/app/Shared/Model/SugestaoAdm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamacoes-adm',
  templateUrl: './reclamacoes-adm.component.html',
  styleUrls: ['./reclamacoes-adm.component.scss']
})
export class ReclamacoesADMComponent implements OnInit {
  sugestoes: SugestaoAdm[] = [];

  constructor(
    private sugestaoAdmService: ServSugestaoAdmService,
    private router: Router
  ) {}

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
        // Reload the component to fetch the updated list of suggestions
        this.getAllSugestoesAdm();
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
        // Reload the component to fetch the updated list of suggestions
        this.getAllSugestoesAdm();
      },
      error => {
        // Handle error
      }
    );
  }

  deleteSugestaoAdm(id: string) {
    this.sugestaoAdmService.deleteSugestaoAdm(id).subscribe(
      () => {
        // Sugestão administrativa excluída com sucesso
        // Reload the component to fetch the updated list of suggestions
        this.getAllSugestoesAdm();
      },
      error => {
        // Handle error
      }
    );
  }
}