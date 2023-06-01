import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PipeVivoMuertoPipe } from './pipes/pipe-vivo-muerto.pipe';
import { PublicaPersonajesComponent } from './paginas/publica/publica-personajes.component';
import { PrivadaPersonajesComponent } from './paginas/privada/privada-personajes.component';


@NgModule({
  declarations: [
    PipeVivoMuertoPipe,
    PublicaPersonajesComponent,
    PrivadaPersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
