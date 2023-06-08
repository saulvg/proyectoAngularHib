import { Component } from '@angular/core';
import { Personajes } from './interfaces/personajes';
import { ServicioPersonajesService } from './servicios/servicio-personajes.service';

@Component({
  selector: 'app-vista-personajes',
  templateUrl: './vista-personajes.component.html',
  styleUrls: ['./vista-personajes.component.css']
})
export class VistaPersonajesComponent {
  personajes: Personajes[] = [];
  mostrar = false;
  prueba: boolean = true;

  constructor(private servPersonajes: ServicioPersonajesService) { }

  cli() {
    this.prueba = !this.prueba;
  }

  muestraDescripcion(personaje: Personajes) {
    personaje.mostrarDescripcion = !personaje.mostrarDescripcion;
  }
}
