import { Component } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publica-personajes',
  templateUrl: './publica-personajes.component.html',
  styleUrls: ['./publica-personajes.component.css'],
})
export class PublicaPersonajesComponent {

  personajes: Personajes[] = [];

  constructor(private servPersonajes: ServicioPersonajesService, private router: Router) { }

  /** Llama a la funcion getPersonajes() del servicio para obtener un array de todos los personajes */
  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
      },
      (err) => {
        console.log("Soy error", err);
        this.router.navigate(['/not-found']);

      }
    )
  }

  ngOnInit() {
    this.obtenerPersonajes();
  }

  /**Recibe un personaje, cambia su propiedad mostrarDescripcion (boolean),
   * si es true -> false, si es false -> true
   */
  muestraDescripcion(personaje: Personajes) {
    personaje.mostrarDescripcion = !personaje.mostrarDescripcion;
  }

}
