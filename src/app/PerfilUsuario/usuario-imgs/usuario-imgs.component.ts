import { Component, OnInit } from '@angular/core';
import { ServUsuarioServImgService } from 'src/app/Shared/Service/serv-usuario-serv-img.service';
import { UsuarioServImg } from 'src/app/Shared/Model/UsuarioServImg';
import { SharedDataService } from 'src/app/Shared/Service/GeneralData/shared-data.service';
@Component({
  selector: 'app-usuario-imgs',
  templateUrl: './usuario-imgs.component.html',
  styleUrls: ['./usuario-imgs.component.scss']
})
export class UsuarioImgsComponent implements OnInit {
  usuarioServImgs: UsuarioServImg[] = [];
  selectedFile: File | null = null;

  constructor(private servUsuarioServImgService: ServUsuarioServImgService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.getUsuarioServImgs();
  }

  getUsuarioServImgs(): void {
    this.servUsuarioServImgService.getUsuarioServImgs().subscribe(
      usuarioServImgs => {
        this.usuarioServImgs = usuarioServImgs;
      },
      error => {
        // Trate possíveis erros
      }
    );
  }

  postarFoto(event: Event): void {
    event.preventDefault();
    if (this.selectedFile) {
      const idUsuario = this.sharedDataService.getidUsuario();
      this.saveUsuarioServImg(idUsuario, this.selectedFile);
    }
  }

  saveUsuarioServImg(idUsuario: string, image: File): void {
    this.servUsuarioServImgService.saveUsuarioServImg(idUsuario, image).subscribe(
      usuarioServImg => {
        // Lógica após salvar a imagem do usuário de serviço
        this.getUsuarioServImgs(); // Atualiza a lista de imagens
        this.selectedFile = null; // Limpa a seleção de arquivo
      },
      error => {
        // Trate possíveis erros
      }
    );
  }

  excluirFoto(id: string): void {
    this.servUsuarioServImgService.deleteUsuarioServImg(id).subscribe(
      () => {
        // Lógica após excluir o usuário de serviço de imagem
        this.getUsuarioServImgs(); // Atualiza a lista de imagens
      },
      error => {
        // Trate possíveis erros
      }
    );
  }
}