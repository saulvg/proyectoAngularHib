import { Component } from '@angular/core';
import { Episodios } from './interfaces/episodios';
import { ServicioEpisodioService } from './servicios/servicio-episodio.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponentEpisodios {
  episodios: Episodios[] = [];
  prueba: boolean = true

  constructor(private srvEpisodios: ServicioEpisodioService) { }

  /* ngOnInit() {
    this.obtenrEpisodios();
  }; */
  /*  funcionpa() {
     console.log('soy pa');
     this.srvEpisodios.getEpisodios().subscribe(
       (res: Episodios[]) => {
         this.episodios = res
         console.log(res);
 
       }
     );
 
   } */

  /*  obtenrEpisodios() {
 
     this.srvEpisodios.getEpisodios().subscribe(
       (res: Episodios[]) => {
         this.episodios = res
         console.log(res);
 
       }
     );
   }; */

  cli() {
    this.prueba = !this.prueba
  }

}
