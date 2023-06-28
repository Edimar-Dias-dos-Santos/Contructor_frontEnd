import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';
import { ServLoginConstructoAdmService } from 'src/app/Shared/Service/serv-login-constructo-adm.service';
import Swal from 'sweetalert2';
import { Login } from 'src/app/Shared/Model/Login';
import { SharedDataService } from 'src/app/Shared/Service/GeneralData/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: ServLoginServiceService,
    private loginAdmService: ServLoginConstructoAdmService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

  autenticarUsuario(username: string, password: string): void {
    this.loginAdmService.authenticateUser(username, password)
      .subscribe(
        () => {
          this.handleAdminAuthenticationSuccess();
        },
        (error) => {
          this.handleUserAuthenticationError(username, password);
        }
      );
  }

  private handleAdminAuthenticationSuccess(): void {
    Swal.fire('Atenção!', 'Sou autenticarUsuarioAdm', 'success');
    this.router.navigateByUrl('/ConstructorADM');
  }

  private handleUserAuthenticationError(username: string, password: string): void {
    this.loginService.authenticateUser(username, password)
      .subscribe(
        (login: Login) => {
          const idUsuario = login.idUsuario;
          this.sharedDataService.setidUsuario(idUsuario);
          this.handleUserAuthenticationSuccess();
        },
        (error) => {
          this.handleAuthenticationFailure();
        }
      );
  }

  private handleUserAuthenticationSuccess(): void {
    Swal.fire('Atenção!', 'Sou autenticarUsuario', 'success');
    this.router.navigateByUrl('/PerfilUsuario');
  }

  private handleAuthenticationFailure(): void {
    alert('Eu não existo!');
  }
}