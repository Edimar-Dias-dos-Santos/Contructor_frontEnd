import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/app/Shared/Model/Avaliacao';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { ServiceAvaliacaoService } from 'src/app/Shared/Service/service-avalicao.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  servicoUsuario = {} as ServUsuario;
  serviceAvaliacaoService = {} as ServiceAvaliacaoService;

  usuario = {} as Usuario;
  avaliacoes: Avaliacao[] = [];


  constructor(public servUsuario: ServUsuario, 
                     serviceAvaliacaoService: ServiceAvaliacaoService) {}

  ngOnInit(): void {
 
    this.recuperaUsuario();
  }

  recuperaUsuario() {
    const idUser = localStorage.getItem('idUsuario');
  
    if (idUser !== null) {
      this.servUsuario.getUsuario(idUser).subscribe((resp) => {
        this.usuario = resp;
      });
    } 
  }

  recuPeraAvaliacoes(): void{
    const idUser = localStorage.getItem('idUsuario');

    if(idUser !== null)
    {
       this.serviceAvaliacaoService.getAvaliacaoByUsuarioId(idUser).subscribe((resp)=> {
       this.avaliacoes = resp; });
    }


  }


}
