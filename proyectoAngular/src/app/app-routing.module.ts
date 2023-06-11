import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginasEstaticas/home/home.component';
import { QuienesSomosComponent } from './paginasEstaticas/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './paginasEstaticas/contactanos/contactanos.component';
import { NotFoundComponent } from './paginasEstaticas/not-found/not-found.component';
import { SesionGuard } from './compartido/guardianes/sesion.guard';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'personajes',
    loadChildren: () => import('./paginasDinamicas/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'planetas',
    loadChildren: () => import('./paginasDinamicas/planetas/planetas.module').then(m => m.PlanetasModule)
  },
  {
    path: 'episodios',
    loadChildren: () => import('./paginasDinamicas/episodios/episodios.module').then(m => m.EpisodiosModule)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule),
    canActivate: [SesionGuard]
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
