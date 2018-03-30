import { Component } from '@angular/core';

@Component({
    // selector para indicar en que etiqueta se va a cargar el componente
    selector: 'videojuegos',
        template: `
        <h2>Componente de {{nombre}}</h2>
        <h6 *ngIf="mostrar_retro != true">El mejor regalo es: {{regalo}} </h6>
        <p [style.background] ="'blue'"
        [style.color] ="color"
         *ngIf='mostrar_retro'>
         El mejor regalo es: {{regalo_variable}} </p>
         <h2>Listado de video Juegos</h2>
         <ul>
            <li *ngFor="let game of videojuegos">{{game}}</li>
        </ul>
        `
        // vamor a hacer una condicion *ngIf
        //para hacer una iteracion usamos el * ngFor
        // este crea una variable por cada una de los elementos delk arrya
        

})

export class VideojuegosComponent{
    public nombre = 'Videojuegos 2018';
    public regalo = 'el conocimiento';
    public regalo_variable = 'La sabiduria';
   public color = 'red';
    public mostrar_retro = true;
    public videojuegos = [
        'Los Sims',
        'Assins credd',
        'GTA 5',
        'Call of duty',
        'Tekken'
    ]
}
