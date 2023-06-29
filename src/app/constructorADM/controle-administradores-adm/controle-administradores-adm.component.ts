import { Component, OnInit } from '@angular/core';
import { ServLoginConstructoAdmService } from 'src/app/Shared/Service/serv-login-constructo-adm.service';
import { LoginConstructoAdm } from 'src/app/Shared/Model/LoginConstructoAdm';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controle-administradores-adm',
  templateUrl: './controle-administradores-adm.component.html',
  styleUrls: ['./controle-administradores-adm.component.scss']
})
export class ControleAdministradoresADMComponent implements OnInit {
  logins: LoginConstructoAdm[] = [];
  currentLogin: LoginConstructoAdm | null = null;

  constructor(private servLoginConstructoAdmService: ServLoginConstructoAdmService) { }

  ngOnInit(): void {
    this.getAllLogins();
  }

  getAllLogins(): void {
    this.servLoginConstructoAdmService.getAllLogins()
      .subscribe((logins: LoginConstructoAdm[]) => {
        this.logins = logins;
      });
  }

  createLogin(): void {
    Swal.fire({
      title: 'Novo Login',
      html:
        `<input type="text" id="username" class="swal2-input" placeholder="Username">
         <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      showCancelButton: true,
      confirmButtonText: 'Criar',
      cancelButtonText: 'Cancelar',
      focusConfirm: false,
      preConfirm: () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        if (!username || !password) {
          Swal.showValidationMessage('Preencha todos os campos');
          return false;
        }
        return { username, password };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        const { username, password } = result.value;
        const login: LoginConstructoAdm = {
          idLoginConstructoAdm: '', // Deixe vazio, pois o ID será gerado pelo servidor
          username,
          password
        };
        this.servLoginConstructoAdmService.saveLogin(login)
          .subscribe(() => {
            Swal.fire('Sucesso', 'Login criado com sucesso!', 'success').then(() => {
              this.getAllLogins(); // Recarrega os dados após a criação
            });
          }, (error) => {
            Swal.fire('Erro', 'Ocorreu um erro ao criar o login.', 'error');
          });
      }
    });
  }

 deleteLogin(id: string): void {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Essa ação não pode ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Deletar',
    cancelButtonText: 'Cancelar'
  }).then((result: any) => {
    if (result.isConfirmed) {
      this.servLoginConstructoAdmService.deleteLogin(id)
        .subscribe(() => {
          Swal.fire('Deletado!', 'O login foi removido.', 'success').then(() => {
            this.getAllLogins(); // Recarrega os dados após a exclusão
          });
        }, (error) => {
          Swal.fire('Erro', 'Ocorreu um erro ao deletar o login.', 'error');
        });
    }
  });
}
updateLogin(login: LoginConstructoAdm): void {
  Swal.fire({
    title: 'Editar Login',
    html:
      `<input type="text" id="username" class="swal2-input" value="${login.username}">
       <input type="password" id="password" class="swal2-input" value="${login.password}">`,
    showCancelButton: true,
    confirmButtonText: 'Atualizar',
    cancelButtonText: 'Cancelar',
    focusConfirm: false,
    preConfirm: () => {
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      if (!username || !password) {
        Swal.showValidationMessage('Preencha todos os campos');
        return false;
      }
      return { username, password };
    }
  }).then((result: any) => {
    if (result.isConfirmed) {
      const { username, password } = result.value;
      const updatedLogin: LoginConstructoAdm = {
        idLoginConstructoAdm: login.idLoginConstructoAdm,
        username,
        password
      };
      this.servLoginConstructoAdmService.updateLogin(login.idLoginConstructoAdm, updatedLogin)
        .subscribe(() => {
          Swal.fire('Sucesso', 'Login atualizado com sucesso!', 'success').then(() => {
            this.getAllLogins(); // Recarrega os dados após a atualização
          });
        }, (error) => {
          Swal.fire('Erro', 'Ocorreu um erro ao atualizar o login.', 'error');
        });
    }
  });
}
}