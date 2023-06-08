import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadaPersonajesComponent } from './paginas/privada/privada-personajes.component';
import { VistaPersonajesComponent } from './vista-personajes.component';

const routes: Routes = [
  {
    path: '',
    component: VistaPersonajesComponent
  },
  {
    path: 'privada',
    component: PrivadaPersonajesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
