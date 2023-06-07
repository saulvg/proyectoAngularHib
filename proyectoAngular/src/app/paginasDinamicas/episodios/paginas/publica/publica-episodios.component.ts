import { Component } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';

@Component({
  selector: 'app-publica-episodios',
  templateUrl: './publica-episodios.component.html',
  styleUrls: ['./publica-episodios.component.css']
})
export class PublicaEpisodiosComponent {

  episodios: Episodios[] = [];

  constructor(private srvEpisodios: ServicioEpisodioService) { }

  obtenrEpisodios() {
    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res
      }
    );
  };

  ngOnInit() {
    this.obtenrEpisodios();


  };
};
