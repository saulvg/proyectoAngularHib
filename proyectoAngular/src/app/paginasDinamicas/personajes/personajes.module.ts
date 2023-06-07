import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PipeVivoMuertoPipe } from './pipes/pipe-vivo-muerto.pipe';
import { PublicaPersonajesComponent } from './paginas/publica/publica-personajes.component';
import { PrivadaPersonajesComponent } from './paginas/privada/privada-personajes.component';

// Imports de material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//
import { HttpClientModule } from '@angular/common/http';
import { ServicioPersonajesService } from './servicios/servicio-personajes.service';
import { VivoMuertoDirective } from './directivas/mostrar-icono-vivoMuerto.directive';

@NgModule({
  declarations: [
    PipeVivoMuertoPipe,
    PublicaPersonajesComponent,
    PrivadaPersonajesComponent,
    VivoMuertoDirective
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ServicioPersonajesService
  ]
})
export class PersonajesModule { }
