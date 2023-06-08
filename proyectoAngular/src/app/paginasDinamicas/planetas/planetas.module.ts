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
import { VistaPlanetasComponent } from './vista-planetas.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PipeConocidoDesconocidoPipe,
    PrivadaPlanetasComponent,
    PublicaPlanetasComponent,
    VistaPlanetasComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    DirectivasModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    ServicioPlanetasService
  ]
})
export class PlanetasModule { }
