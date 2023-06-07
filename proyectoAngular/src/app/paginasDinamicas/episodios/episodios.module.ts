import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { PipeFormatoFechaPipe } from './pipes/pipe-formato-fecha.pipe';
import { PublicaEpisodiosComponent } from './paginas/publica/publica-episodios.component';
import { PrivadaEpisodiosComponent } from './paginas/privada/privada-episodios.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ServicioEpisodioService } from './servicios/servicio-episodio.service';
import { FormatoTemporadaPipe } from './pipes/pipe-formato-temporada.pipe';


@NgModule({
  declarations: [
    PipeFormatoFechaPipe,
    PublicaEpisodiosComponent,
    PrivadaEpisodiosComponent,
    FormatoTemporadaPipe,
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ServicioEpisodioService
  ]
})
export class EpisodiosModule { }
