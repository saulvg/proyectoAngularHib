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

  param: any = ''

  constructor(private srvEpisodios: ServicioEpisodioService) { }

  ngOnInit() {
    this.obtenrEpisodios();
  };

  obtenrEpisodios() {
    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res
      }
    );
  };

  cli() {
    this.prueba = !this.prueba
  }

}
