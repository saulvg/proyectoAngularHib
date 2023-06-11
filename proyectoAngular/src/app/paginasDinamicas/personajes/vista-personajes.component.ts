import { Component } from '@angular/core';
import { Personajes } from './interfaces/personajes';
import { ServicioPersonajesService } from './servicios/servicio-personajes.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-vista-personajes',
  templateUrl: './vista-personajes.component.html',
  styleUrls: ['./vista-personajes.component.css']
})
export class VistaPersonajesComponent {
  personajes: Personajes[] = [];
  mostrar = false;
  prueba: boolean = true;
  exiteToken: boolean = false;


  constructor(private servPersonajes: ServicioPersonajesService,private cookies: CookieService) { }


  ngOnInit() {
    this.obtenerToken()
  }

  obtenerToken() {
    const token = this.cookies.get("token")
    if (token) {
      this.exiteToken = true;
    };
  };

  cli() {
    this.prueba = !this.prueba;
  }

  muestraDescripcion(personaje: Personajes) {
    personaje.mostrarDescripcion = !personaje.mostrarDescripcion;
  }
}
