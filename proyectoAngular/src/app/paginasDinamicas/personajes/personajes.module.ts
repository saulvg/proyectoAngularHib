import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { PipeVivoMuertoPipe } from './pipes/pipe-vivo-muerto.pipe';


@NgModule({
  declarations: [
    PersonajesComponent,
    PipeVivoMuertoPipe
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
