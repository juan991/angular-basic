import { Component } from "@angular/core";



@Component({
    selector:"app-contador",
    template: `
        <h1>{{ titulo }}</h1>
        <h2>hola chiche este es un verdaderou liveReload</h2>
        <h3>Estamos frente al verdadero hot reload</h3>
        <button (click)="acumular(numero, true)">+1</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(numero, false)">-1</button>
    `
})
export class ContadorComponent {
    title = 'bases';
    public titulo: string = "Contador App";
    public numero: number = 1;

    acumular(conteo: number, sumar: boolean){
        if( sumar ) {
        this.numero+= 1;
        } else {
        this.numero-= 1;
        }
    }
}