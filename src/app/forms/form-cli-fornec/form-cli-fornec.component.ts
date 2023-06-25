import { Component, OnInit } from '@angular/core';
import { ServClifonecService } from 'src/app/Shared/Service/serv-clifonec.service';
import { CliFornec } from 'src/app/Shared/Model/CliFornec';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExceptionDefault } from 'src/app/Shared/Messages/Exceptions';

@Component({
  selector: 'app-form-cli-fornec',
  templateUrl: './form-cli-fornec.component.html',
  styleUrls: ['./form-cli-fornec.component.scss']
})
export class FormCliFornecComponent implements OnInit {

  cliFornec !: CliFornec;
  

  constructor(private cliFornecService: ServClifonecService,
              private servLoginServiceService: ServLoginServiceService,
              private servUsuario: ServUsuario,
              private router: Router) {}

  ngOnInit() {

      this.cliFornec = this.iniciarCliFornec();
  }

  iniciarCliFornec(): CliFornec{
     return {
      idCliFornec: '',
      idUsuario: this.servUsuario.usuarioAtual?.idUsuario || '',
      diasQueTrabalha: 0,
      descricao: '',
      valor: 0
     };
  }

  setCliFornec(): void {

    if (!this.servUsuario.usuarioAtual) {
      Swal.fire('Atenção!', 'código de usuário não encontrado', 'error');
      throw new ExceptionDefault('Por favor informe todos os campos');
    }

    this.cliFornec.idUsuario = this.servUsuario.usuarioAtual.idUsuario;

    this.cliFornecService.setCliFornec(this.cliFornec)
      .subscribe(
        (cliFornec: CliFornec) => {
          console.log('CliFornec criado:', cliFornec);
          // Faça qualquer manipulação adicional necessária após a criação do cliFornec
        },
        (error: any) => {
          Swal.fire('Obs!', 'Ocorreu um erro ao criar um cadastro de serviço:', 'error');
          console.error('Erro ao criar CliFornec:', error);
          // Lide com o erro de forma apropriada
        }
      );
  }
}