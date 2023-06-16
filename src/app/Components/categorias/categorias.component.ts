import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  constructor(private elementRef: ElementRef, private router: Router) { }


  goToTheFilteredPage(id: string): void{

      this.router.navigate(['/'], { queryParams: { filterId: id } });

  }

}


