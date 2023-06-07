import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicaPlanetasComponent } from './paginas/publica/publica-planetas.component';
import { PrivadaPlanetasComponent } from './paginas/privada/privada-planetas.component';

const routes: Routes = [
  {
    path: 'privada',
    component: PrivadaPlanetasComponent
  },
  {
    path: 'publica',
    component: PublicaPlanetasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
