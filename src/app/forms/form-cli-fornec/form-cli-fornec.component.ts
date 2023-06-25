import { Component, OnInit } from '@angular/core';
import { ServClifonecService } from 'src/app/Shared/Service/serv-clifonec.service';
import { CliFornec } from 'src/app/Shared/Model/CliFornec';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';

@Component({
  selector: 'app-form-cli-fornec',
  templateUrl: './form-cli-fornec.component.html',
  styleUrls: ['./form-cli-fornec.component.scss']
})
export class FormCliFornecComponent implements OnInit {

  cliFornec !: CliFornec;
  

  constructor(private cliFornecService: ServClifonecService,
              private servLoginServiceService: ServLoginServiceService) {}

  ngOnInit() {

      this.cliFornec = this.iniciarCliFornec();
  }

  iniciarCliFornec(): CliFornec{
     return {
      id: '',
      idUsuario: '',
      diasQueTrabalha: 0,
      descricao: '',
      valor: 0
     };
  }

  setCliFornec(): void {
    this.cliFornecService.setCliFornec(this.cliFornec)
      .subscribe(
        (cliFornec: CliFornec) => {
          console.log('CliFornec criado:', cliFornec);
          // Faça qualquer manipulação adicional necessária após a criação do cliFornec
        },
        (error: any) => {
          console.error('Erro ao criar CliFornec:', error);
          // Lide com o erro de forma apropriada
        }
      );
  }
}