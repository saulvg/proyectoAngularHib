import { Component } from '@angular/core';
import { Planetas } from './interfaces/planetas';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vista-planetas',
  templateUrl: './vista-planetas.component.html',
  styleUrls: ['./vista-planetas.component.css']
})
export class VistaPlanetasComponent {

  planetas: Planetas[] = [];
  existeToken: boolean = false;

  constructor(private cookies: CookieService){

  }

  ngOnInit(){
    this.obtenerToken();
  }

  /**
   * Método que se encarga de obtener el token del inicio de sesión para poder acceder a la parte privada de la web
   */
  obtenerToken(){
    const token = this.cookies.get('token');

    if(token){
      this.existeToken = true;
    }
  }
}
