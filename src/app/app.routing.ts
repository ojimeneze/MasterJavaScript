// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { CursoComponent} from './curso/curso.component';

// Array de rutas
const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'zapatillas',
		component: ZapatillasComponent
	},
	{
		path: 'videojuego',
		component: VideoJuegoComponent
	},
	{
		path: 'cursos',
		component: CursoComponent
	},
	{
		path: 'cursos/:nombre',
		component: CursoComponent
	},
	{
		path: 'cursos/:nombre/:followers',
		component: CursoComponent
	},
	{
		path: '**',
		component: HomeComponent
	}
];

// Exportar el modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);