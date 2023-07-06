import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/app/Shared/Model/Avaliacao';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { ServiceAvaliacaoService } from 'src/app/Shared/Service/service-avalicao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {


  usuario = {} as Usuario;
  avaliacoes: Avaliacao[] = [];
  nome = '';
  descricao = '';
  nota = 0;

  constructor(public servUsuario: ServUsuario,
               public serviceAvaliacaoService: ServiceAvaliacaoService) {}


  ngOnInit(): void {
 
    this.recuperaUsuario();
    this.recuPeraAvaliacoes();
  }

  recuperaUsuario() {
    const idUser = localStorage.getItem('idUsuario');
  
    if (idUser !== null) {
      this.servUsuario.getUsuario(idUser).subscribe((resp) => {
        this.usuario = resp;
      });
    } 
  }

  recuPeraAvaliacoes(): void {
    const idUser = localStorage.getItem('idUsuario');

    if (idUser !== null) {
      this.serviceAvaliacaoService.getAvaliacaoByUsuarioId(idUser).subscribe((resp) => {
        this.avaliacoes = resp;
      });
    }
  }

  criarAvaliacao(): void {
 
    const idUsuario = localStorage.getItem('idUsuario');
    const novaAvaliacao: Avaliacao = {
      id: '',
      idUsuario: idUsuario || '',
      nome: this.nome,
      descricao: this.descricao,
      nota: this.nota
    };

    this.serviceAvaliacaoService.createAvaliacao(novaAvaliacao).subscribe((resp) => {
      this.avaliacoes.push(resp);
      // Limpar o formulário
      this.nome = '';
      this.descricao = '';
      this.nota = 0;

      Swal.fire('Excelente!', 'muito obrigado pelo seu feedBack', 'success');
      this.recuPeraAvaliacoes();
    });
  }
}