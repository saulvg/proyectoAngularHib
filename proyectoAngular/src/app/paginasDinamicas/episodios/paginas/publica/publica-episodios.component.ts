import { Component, Input } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';

@Component({
  selector: 'app-publica-episodios',
  templateUrl: './publica-episodios.component.html',
  styleUrls: ['./publica-episodios.component.css']
})
export class PublicaEpisodiosComponent {
  @Input() episodios: Episodios[] = []

};
