import { Component } from '@angular/core';
import { ServSugestaoAdmService } from 'src/app/Shared/Service/serv-sugestao-adm.service';
import { SugestaoAdm } from 'src/app/Shared/Model/SugestaoAdm';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent {
  novaSugestao: SugestaoAdm = {
    idSugestaoAdm: '',
    nome: '',
    descricao: ''
  };

  constructor(private sugestaoService: ServSugestaoAdmService) { }

  criarSugestao() {
    this.sugestaoService.criarSugestaoAdm(this.novaSugestao).subscribe(
      (response) => {
        Swal.fire('Excelente!', 'Muito obrigado pela sugestão!', 'success');
        this.limparCampos();
      },
      (error) => {
        console.error('Erro ao criar sugestão:', error);
      }
    );
  }
  
  limparCampos() {
    this.novaSugestao = {
      idSugestaoAdm: '',
      nome: '',
      descricao: ''
    };
  }

  obterTodasSugestoes() {
    this.sugestaoService.getAllSugestaoAdm().subscribe(
      (sugestoes) => {
        console.log('Sugestões obtidas:', sugestoes);
      },
      (error) => {
        console.error('Erro ao obter sugestões:', error);
      }
    );
  }

  obterSugestaoPorId(id: string) {
    this.sugestaoService.getSugestaoAdmById(id).subscribe(
      (sugestao) => {
        console.log('Sugestão obtida:', sugestao);
      },
      (error) => {
        console.error('Erro ao obter sugestão:', error);
      }
    );
  }
}