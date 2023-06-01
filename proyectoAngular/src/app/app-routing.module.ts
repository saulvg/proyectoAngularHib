import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paginasDinamicas/personajes',
    loadChildren: () => import('./paginasDinamicas/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'paginasDinamicas/planetas',
    loadChildren: () => import('./paginasDinamicas/planetas/planetas.module').then(m => m.PlanetasModule)
  },
  {
    path: 'paginasDinamicas/episodios',
    loadChildren: () => import('./paginasDinamicas/episodios/episodios.module').then(m => m.EpisodiosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
