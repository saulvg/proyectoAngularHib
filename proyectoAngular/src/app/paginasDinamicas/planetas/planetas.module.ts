import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasComponent } from './planetas.component';
import { PipeConocidoDesconocidoPipe } from './pipes/pipe-conocido-desconocido.pipe';


@NgModule({
  declarations: [
    PlanetasComponent,
    PipeConocidoDesconocidoPipe
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule
  ]
})
export class PlanetasModule { }
