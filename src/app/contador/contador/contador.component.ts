import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{title}}</h1>
    <h3>La base es: <strong> {{base}} </strong></h3>
    
    <button (click)='acumular(+base)'>+{{base}}</button>
    <h2>{{numero}}</h2>
    <button (click)='acumular(-base)'>-{{base}}</button>`
    
})

export class ContadorComponent{

    title = 'Contador App';
    numero: number = 10;

    acumular(valor: number) {
        this.numero += valor;
    }

    base: number = 5;

}