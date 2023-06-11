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
import { VistaComponentEpisodios } from './vista-episodios.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioModalEpisodiosComponent } from './formulario-modal-episodios/formulario-modal-episodios.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';






@NgModule({
  declarations: [
    PipeFormatoFechaPipe,
    PublicaEpisodiosComponent,
    PrivadaEpisodiosComponent,
    FormatoTemporadaPipe,
    VistaComponentEpisodios,
    FormularioModalEpisodiosComponent,
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [
    ServicioEpisodioService
  ]
})
export class EpisodiosModule { }
