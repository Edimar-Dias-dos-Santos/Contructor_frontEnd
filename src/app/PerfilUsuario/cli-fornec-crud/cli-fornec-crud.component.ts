import { Component, OnInit } from '@angular/core';
import { ClifornecServico } from 'src/app/Shared/Model/ClifornecServico';
import { CliFornec } from 'src/app/Shared/Model/CliFornec';
import { ServCliFornecServService } from 'src/app/Shared/Service/serv-clifornec-serv.service';
import { ServClifonecService } from 'src/app/Shared/Service/serv-clifonec.service';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-cli-fornec-crud',
  templateUrl: './cli-fornec-crud.component.html',
  styleUrls: ['./cli-fornec-crud.component.scss'],
  providers: [ServCliFornecServService, ServClifonecService, ServUsuario] // Add the service providers
})
export class CliFornecCrudComponent implements OnInit {
  cliFornecServico: ClifornecServico = {
    idClifornecServico: '',
    idServico: '',
    idCliFornec: ''
  };
  cliFornec: CliFornec = {
    idCliFornec: '',
    idUsuario: '',
    diasQueTrabalha: 0,
    descricao: '',
    valor: 0
  };
  servicos: string[] = [
    'Pedreiro',
    'Marceneiro',
    'Pintor',
    'Eletricista',
    'Encanador',
    'Vidraceiro',
    'De tudo um pouco'
  ];
  listaCliFornec: CliFornec[] = [];
  constructor(
    private cliFornecServicoService: ServCliFornecServService,
    private cliFornecService: ServClifonecService,
    private usuarioService: ServUsuario
  ) {}

  ngOnInit() {
    // Obtém o ID do usuário atual do localStorage
    const idUsuario = localStorage.getItem('idUsuario');
    if (idUsuario) {
      this.cliFornec.idUsuario = idUsuario;
    }
  }

  saveCliFornecServico() {
    // Salva o CliFornecServico
    this.cliFornecServicoService
      .saveCliFornecServico(this.cliFornecServico)
      .subscribe((cliFornecServicoResponse: any) => {
        console.log('CliFornecServico salvo com sucesso', cliFornecServicoResponse);
        // Obtém o ID do CliFornecServico salvo
        const idCliFornecServico = cliFornecServicoResponse.idClifornecServico;
  
        // Salva o CliFornec associado ao CliFornecServico
        this.cliFornec.idCliFornec = idCliFornecServico;
        this.cliFornecService
          .setCliFornec(this.cliFornec)
          .subscribe((cliFornecResponse: any) => {
            console.log('CliFornec salvo com sucesso', cliFornecResponse);
            // Adiciona o CliFornec à lista e limpa os campos do formulário
            this.listaCliFornec.push(cliFornecResponse);
            this.cliFornec = {
              idCliFornec: '',
              idUsuario: '',
              diasQueTrabalha: 0,
              descricao: '',
              valor: 0
            };
          });
      });
  }

  removerCliFornec(idCliFornec: string) {
    // Remova o CliFornec da lista com base no ID
    this.listaCliFornec = this.listaCliFornec.filter(cliFornec => cliFornec.idCliFornec !== idCliFornec);
  }
}



