import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  servicoUsuario = {} as ServUsuario;

  usuario = {} as Usuario;


  constructor(public servUsuario: ServUsuario,) {
  }

  ngOnInit(): void {
    debugger
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


}
