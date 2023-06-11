import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadaEpisodiosComponent } from './paginas/privada/privada-episodios.component';
import { PublicaEpisodiosComponent } from './paginas/publica/publica-episodios.component';
import { VistaComponentEpisodios } from './vista-episodios.component';

const routes: Routes = [
  //Pintamos la vista quien contiene tanto el componente publico como el privado
  {
    path: '',
    component: VistaComponentEpisodios
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodiosRoutingModule { }
