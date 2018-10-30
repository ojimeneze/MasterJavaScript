import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user: any;
	public userId: any;
	public fecha: any;
  public new_user: any;
  public user_saved: any;

	constructor(private _peticionesService: PeticionesService) {
		this.userId = 1;
    this.new_user = {
      name: '',
      job: ''
    };
	}

	public ngOnInit() {
		this.fecha = new Date(2019,5,20);
		this.cargaUsuario();
	}

	public cargaUsuario(){
		this.user = null;
		this._peticionesService.getUser(this.userId).subscribe(
		result => {
			this.user = result.data;
		},
		error => {
			console.log(<any>error);
		}
		);
	}

  public onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
       response => {
         this.user_saved = response;
         console.log(this.user_saved);
         form.reset();
       },
       error => {
         console.log(<any>error);
       }
     );
  }

}
