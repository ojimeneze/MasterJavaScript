import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	public zapatillas: Array<Zapatilla>

	constructor(){
		this.zapatillas = [
			new Zapatilla('Nike Airmax', 'Nike', 'Rojo', 190, true),
			new Zapatilla('Reebok Classic', 'Reebook', 'Blanco', 80, true),
			new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 175, false),
			new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
			new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
		];
	}

	public getTexto(): string{
		return 'Hola mundo desde un servicio';
	}

	public getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}
}