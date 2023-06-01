import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './episodios.component';
import { PipeFormatoFechaPipe } from './pipes/pipe-formato-fecha.pipe';


@NgModule({
  declarations: [
    EpisodiosComponent,
    PipeFormatoFechaPipe,
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule
  ]
})
export class EpisodiosModule { }
