import { Component } from '@angular/core';

import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master de Javascript y Angular';
  public descripcion: string;
  public show_VideoGames: boolean = true;
  public config;

  constructor() {
  	this.config = Configuracion;
  	this.title = Configuracion.titulo;
  	this.descripcion = Configuracion.descripcion;
  }

  hideVideoGames(value) {
  	this.show_VideoGames = value;
  }
}
