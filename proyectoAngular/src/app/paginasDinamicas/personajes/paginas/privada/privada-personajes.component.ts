import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';

@Component({
  selector: 'app-privada-personajes',
  templateUrl: './privada-personajes.component.html',
  styleUrls: ['./privada-personajes.component.css']
})
export class PrivadaPersonajesComponent {
  @Input() personajes: Personajes[] = []

  borrar = "../../../../../assets/iconos/blackhole.png"
  editar = "../../../../../assets/iconos/portal-gun.png"

  @Output() muestraDescripcion: EventEmitter<Personajes> = new EventEmitter<Personajes>();

  constructor(private servPersonajes: ServicioPersonajesService) { }

  miFuncion(personaje: Personajes): void {
    this.muestraDescripcion.emit(personaje);
  }

  borrarPersonaje(personaje: Personajes){
    this.servPersonajes.eliminarPersonaje(personaje.id).subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
      }
    );
  }

  editarPersonaje(){}
}
