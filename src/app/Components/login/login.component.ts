import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';
import { ServLoginConstructoAdmService } from 'src/app/Shared/Service/serv-login-constructo-adm.service';
import Swal from 'sweetalert2';
import { Login } from 'src/app/Shared/Model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: ServLoginServiceService,
    private loginAdmService: ServLoginConstructoAdmService,
    private router: Router
  ) { }

  autenticarUsuario(username: string, password: string): void {
    this.loginAdmService.authenticateUser(username, password)
      .subscribe(
        () => {
          Swal.fire('Atenção!', 'Sou autenticarUsuarioAdm', 'success').then(() => {
            this.router.navigate(['/ConstructorADM']);
          });
        },
        (error) => {
          this.loginService.authenticateUser(username, password)
            .subscribe(
              (login: Login) => {
                this.loginService.getLoginById(login.idLogin)
                  .subscribe(
                    (completeLogin: Login) => {
                      localStorage.setItem('idUsuario', completeLogin.codigoLogado.toString());
                      Swal.fire('Atenção!', 'Seja bem-vindo', 'success').then(() => {
                        this.router.navigate(['/PerfilUsuario']);
                      });
                    },
                    (error) => {
                      alert('Eu não existo!');
                    }
                  );
              },
              (error) => {
                alert('Eu não existo!');
              }
            );
        }
      );
  }
}