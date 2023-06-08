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
import { MostrarIconosGeneroDirective } from './directivas/mostrar-iconos-genero.directive';
import { PipeDescripcionPipe } from './pipes/pipe-descripcion.pipe';
import { VistaPersonajesComponent } from './vista-personajes.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PipeVivoMuertoPipe,
    PublicaPersonajesComponent,
    PrivadaPersonajesComponent,
    VivoMuertoDirective,
    MostrarIconosGeneroDirective,
    PipeDescripcionPipe,
    VistaPersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    ServicioPersonajesService
  ]
})
export class PersonajesModule { }
