import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadaEpisodiosComponent } from './paginas/privada/privada-episodios.component';
import { PublicaEpisodiosComponent } from './paginas/publica/publica-episodios.component';

const routes: Routes = [
  {
    path: 'privada',
    component: PrivadaEpisodiosComponent
  },
  {
    path: 'publica',
    component: PublicaEpisodiosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodiosRoutingModule { }
