import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public identificado: boolean;


  	constructor() {
  		this.identificado = false;
  	}

  	public ngOnInit() {
	}

	public setIdentificado(){
		this.identificado = true;
	}

	public unsetIdentificado(){
		this.identificado = false;
	}

}
