import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PipeConocidoDesconocidoPipe } from './pipes/pipe-conocido-desconocido.pipe';
import { PublicaPlanetasComponent } from './paginas/publica/publica-planetas.component';
import { PrivadaPlanetasComponent } from './paginas/privada/privada-planetas.component';


@NgModule({
  declarations: [
    PipeConocidoDesconocidoPipe,
    PublicaPlanetasComponent,
    PrivadaPlanetasComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule
  ]
})
export class PlanetasModule { }
