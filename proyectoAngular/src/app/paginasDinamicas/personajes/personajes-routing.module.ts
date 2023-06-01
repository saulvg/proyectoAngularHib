import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadaPersonajesComponent } from './paginas/privada/privada-personajes.component';
import { PublicaPersonajesComponent } from './paginas/publica/publica-personajes.component';

const routes: Routes = [
  {
    path: 'privada',
    component: PrivadaPersonajesComponent
  },
  {
    path: 'publica',
    component: PublicaPersonajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
