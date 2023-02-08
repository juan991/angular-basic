import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','batman','superman'];
  heroeBorrado: string = '';
  existeBorrado: boolean = false;

  borrarHeroe(): void {
  
    this.heroeBorrado = this.heroes.shift() || ''; // Si retorna undefined, termina devolviendo un string vacio
    this.existeBorrado = true;    
  }
}
