import { Component } from '@angular/core';
import { Planetas } from './interfaces/planetas';
import { ServicioPlanetasService } from './servicios/servicio-planetas.service';
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

  obtenerToken(){
    const token = this.cookies.get('token');

    if(token){
      this.existeToken = true;
    }
  }
}
