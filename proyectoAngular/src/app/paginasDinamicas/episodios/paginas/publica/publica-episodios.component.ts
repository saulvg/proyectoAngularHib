import { Component } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';
import { Observable } from 'rxjs';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';

@Component({
  selector: 'app-publica-episodios',
  templateUrl: './publica-episodios.component.html',
  styleUrls: ['./publica-episodios.component.css']
})
export class PublicaEpisodiosComponent {

  //episodios:Episodios[];

  episodios$ = new Observable<Episodios>

  constructor(private srvEpisodios:ServicioEpisodioService){}
 /*    this.episodios = [
      {
        id: 1,
        titulo: "Pilot",
        fechaEmision: "December 2, 2013",
        episodio: "S01E01",
        sinopsis: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
    },
    {
        id: 11,
        titulo: "Ricksy Business",
        fechaEmision: "April 14, 2014",
        episodio: "S01E11",
        sinopsis: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
    },
    {
        id: 25,
        titulo: "Vindicators 3: The Return of Worldender",
        fechaEmision: "August 13, 2017",
        episodio: "S03E04",
        sinopsis: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
    }
    ]
  } */



obtenrEpisodios(){
  this.episodios$ = this.srvEpisodios.getEpisodios();
}
ngOnInit(){
  this.obtenrEpisodios();
}
}
