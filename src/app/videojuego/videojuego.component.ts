import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// No lleva (;) al final
@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
	public titulo: string;
	public listado: string;

	constructor() {
		this.titulo = 'Componente de Video Juegos';
		this.listado = 'Listado de los juegos mas populares';
		console.log('Se ha cargado el componente: videojuego.component.ts');
	}

	// Se ejecuta al inicializar el componente, despues del constructor
	ngOnInit() {
		console.log('OnInit ejecutado!');
	}

	// Se ejecuta en el momento que sucede un cambio en el componente
	ngDoCheck() {
		console.log('DoCheck ejecutado');
	}

	// Se ejecuta cuando el componente es eliminado de la vista
	ngOnDestroy() {
		console.log('OnDestroy ejecutado');
	}

	cambiarTitulo(){
		this.titulo = 'Nuevo titulo del componente';
	}
}