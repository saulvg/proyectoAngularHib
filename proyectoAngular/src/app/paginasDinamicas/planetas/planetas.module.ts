import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PipeConocidoDesconocidoPipe } from './pipes/pipe-conocido-desconocido.pipe';
import { PrivadaPlanetasComponent } from './paginas/privada/privada-planetas.component';
import { PublicaPlanetasComponent } from './paginas/publica/publica-planetas.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PipeConocidoDesconocidoPipe,
    PrivadaPlanetasComponent,
    PublicaPlanetasComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PlanetasModule { }
