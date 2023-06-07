import { Component } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';
import { VivoMuertoDirective } from '../../directivas/mostrar-icono-vivoMuerto.directive';

@Component({
  selector: 'app-publica-personajes',
  templateUrl: './publica-personajes.component.html',
  styleUrls: ['./publica-personajes.component.css'],
})
export class PublicaPersonajesComponent {

  personajes: Personajes[] = [];
  mostrarDescripcion = false;

  constructor(private servPersonajes: ServicioPersonajesService) { }

  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
      }
    )
  }

  ngOnInit() {
    this.obtenerPersonajes();
  }

  muestraDescripcion() {
    if (this.mostrarDescripcion) {
      this.mostrarDescripcion = false;
    } else {
      this.mostrarDescripcion = true;
    }

  }

}
