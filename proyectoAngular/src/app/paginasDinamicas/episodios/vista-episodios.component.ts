import { Component } from '@angular/core';
import { Episodios } from './interfaces/episodios';
import { ServicioEpisodioService } from './servicios/servicio-episodio.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponentEpisodios {
  episodios: Episodios[] = [];
  //Si existe token pintamos el componente de usuario logeado si no el de usuario publico
  exiteToken: boolean = false;

  constructor(private cookies: CookieService) { }

  ngOnInit() {
    this.obtenerToken()
  }

  obtenerToken() {
    const token = this.cookies.get("token")
    if (token) {
      this.exiteToken = true;
    };
  };


}
