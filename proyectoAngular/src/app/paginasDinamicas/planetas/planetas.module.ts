import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PipeConocidoDesconocidoPipe } from './pipes/pipe-conocido-desconocido.pipe';
import { PrivadaPlanetasComponent } from './paginas/privada/privada-planetas.component';
import { PublicaPlanetasComponent } from './paginas/publica/publica-planetas.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServicioPlanetasService } from './servicios/servicio-planetas.service';
import { HttpClientModule } from '@angular/common/http';
import { DirectivasModule } from 'src/app/compartido/directivas/directivas.module';

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
    MatButtonModule,
    HttpClientModule,
    DirectivasModule

  ],
  providers: [
    ServicioPlanetasService
  ]
})
export class PlanetasModule { }
