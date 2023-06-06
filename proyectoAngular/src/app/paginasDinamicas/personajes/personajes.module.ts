import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PipeVivoMuertoPipe } from './pipes/pipe-vivo-muerto.pipe';
import { PublicaPersonajesComponent } from './paginas/publica/publica-personajes.component';
import { PrivadaPersonajesComponent } from './paginas/privada/privada-personajes.component';

// Imports de material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PipeVivoMuertoPipe,
    PublicaPersonajesComponent,
    PrivadaPersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PersonajesModule { }
