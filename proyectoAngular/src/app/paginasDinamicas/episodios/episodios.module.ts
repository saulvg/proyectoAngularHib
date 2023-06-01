import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { PipeFormatoFechaPipe } from './pipes/pipe-formato-fecha.pipe';
import { PublicaEpisodiosComponent } from './paginas/publica/publica-episodios.component';
import { PrivadaEpisodiosComponent } from './paginas/privada/privada-episodios.component';


@NgModule({
  declarations: [
    PipeFormatoFechaPipe,
    PublicaEpisodiosComponent,
    PrivadaEpisodiosComponent,
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule
  ]
})
export class EpisodiosModule { }
