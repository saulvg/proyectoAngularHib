import { Component } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publica-episodios',
  templateUrl: './publica-episodios.component.html',
  styleUrls: ['./publica-episodios.component.css']
})
export class PublicaEpisodiosComponent {
  episodios: Episodios[] = [];

  constructor(private srvEpisodios: ServicioEpisodioService, private router: Router) { };

  ngOnInit() {
    this.obtenrEpisodios();
  };

  obtenrEpisodios() {
    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res;
      },
      (err) => {
        console.log("Soy error", err);
        this.router.navigate(['/not-found']);

      }
    );
  };

};
