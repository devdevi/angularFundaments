import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  VideojuegosComponent } from './videojuegos/videojuegos.component';

// nos permite definir serie de configuracioness
//Aqui se deben cargar todos los componentes importados
@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
