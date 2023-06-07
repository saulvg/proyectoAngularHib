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
  prueba:boolean = true;

  constructor(private servPersonajes: ServicioPersonajesService) { }

  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
      }
    )
  }

  cli() {
    this.prueba = !this.prueba;
  }

  ngOnInit() {
    this.obtenerPersonajes();
  }

  muestraDescripcion(personaje: Personajes) {
    personaje.mostrarDescripcion = !personaje.mostrarDescripcion;
  }
}
