import { Component, OnInit } from '@angular/core';

import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
	public titulo: string = 'Componente de Zapatillas';
	public zapatillas: Array<Zapatilla>;
	public marcas: String[];
	public color: string;
	public mi_marca: string;

	constructor(){
		this.mi_marca = 'Fox';
		this.color = 'blue';
		this.marcas = new Array;
		this.zapatillas = [
			new Zapatilla('Nike Airmax', 'Nike', 'Rojo', 190, true),
			new Zapatilla('Reebok Classic', 'Reebook', 'Blanco', 80, true),
			new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 175, false),
			new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
			new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
		];
	}

	public ngOnInit(){
		console.log(this.zapatillas);
		this.getMarcas();
	}

	public getMarcas(){
		this.zapatillas.forEach((zapatilla, index) => {
			if (this.marcas.indexOf(zapatilla.marca) < 0)
				this.marcas.push(zapatilla.marca);
		});

		console.log(this.marcas);
	}

	public getMarca(){
		alert(this.mi_marca);
	}

	public addMarca(){
		if (this.marcas.indexOf(this.mi_marca) < 0)
			this.marcas.push(this.mi_marca);
		else
			alert('La marca ' + this.mi_marca + ' ya pertenece a la lista!');
	}

	public borrarMarca(index){
		//delete this.marcas[index];
		this.marcas.splice(index, 1);
	}

	public onBlur(){
		console.log('Has salido del input');
	}

	public mostrarPalabra(){
		alert(this.mi_marca);
	}
}