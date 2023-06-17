import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Usuarios: Usuario[] = [];

  constructor(
    public servUsuario: ServUsuario,
    private elementRef: ElementRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.showSpinner();
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      const filterId = params['filterId'];
      this.filterDivs(filterId || 'all');
    });

   // this.animateBanner();
  }

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe((data: Usuario[]) => { // Specify the type of 'data' as Usuario[]
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

  sortDivsByName(order: 'asc' | 'desc'): void {
    const divs = Array.from(this.elementRef.nativeElement.querySelectorAll('.col-md-4'));

    // Save the filter buttons and temporarily remove them
    const filterButtons = Array.from(this.elementRef.nativeElement.querySelectorAll('.btn-filter'));
    filterButtons.forEach((button: any) => {
      button.remove();
    });

    divs.sort((a: any, b: any) => {
      const nameA = a.querySelector('.card-title').textContent.trim().toLowerCase();
      const nameB = b.querySelector('.card-title').textContent.trim().toLowerCase();

      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    const container = this.elementRef.nativeElement.querySelector('.container.my-5 .row.mt-4');
    divs.forEach((div: any) => {
      container.appendChild(div);
    });

    // Restore the filter buttons to their original position
    const filterButtonContainer = this.elementRef.nativeElement.querySelector('.btn-group[role="group"]');
    filterButtons.forEach((button: any) => {
      filterButtonContainer.appendChild(button);
    });
  }

 showSpinner(): void {
    Swal.fire({
      title: 'Carregando dados',
      html: '<div class="custom-spinner">Por favor aguarde</div>',
      allowOutsideClick: false,
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        // Cleanup code
      }
    });
  }
   
  animateBanner(): void {
    const bannerElement = document.getElementById('banner');
    if (bannerElement) {
      const textElement = bannerElement.querySelector('.banner-text');
      if (textElement) {
        // Animação de brilho
        const shineAnimation = anime({
          targets: textElement,
          //opacity: [5.5, 1],
          duration: 5,
          easing: 'linear',
          loop: true,
          direction: 'alternate'
        });
  
        // Animação de efeitos de cor
        const colorAnimation = anime({
          targets: textElement,
          color: ['#0000', '#00ff00', '#0000ff'], // Array de cores para animação
          duration: 2000,
          easing: 'linear',
          loop: true
        });
  
        const bannerAnimation = anime({
          targets: bannerElement,
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: () => {
            shineAnimation.pause();
            colorAnimation.pause();
          }
        });
  
        // Reiniciar animações quando o mouse passar pelo texto
        textElement.addEventListener('mouseenter', () => {
          shineAnimation.play();
          colorAnimation.play();
        });
  
        // Pausar animações quando o mouse sair do texto
        textElement.addEventListener('mouseleave', () => {
          shineAnimation.pause();
          colorAnimation.pause();
        });
      }
    }
  }
  }