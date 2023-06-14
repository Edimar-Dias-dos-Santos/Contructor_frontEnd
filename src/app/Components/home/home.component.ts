import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Usuarios: Usuario[] = [];

  constructor(public servUsuario: ServUsuario, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.filterDivs('all');
  }

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe((data) => {
      this.Usuarios = data;
    });
  }

  filterDivs(id: string): void {
    const divs = this.elementRef.nativeElement.querySelectorAll('.col-md-4');
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i] as HTMLElement;
      if (id === 'all' || div.id === id) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }
}