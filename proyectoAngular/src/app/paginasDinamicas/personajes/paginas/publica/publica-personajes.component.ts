import { Component } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';

@Component({
  selector: 'app-publica-personajes',
  templateUrl: './publica-personajes.component.html',
  styleUrls: ['./publica-personajes.component.css'],
})
export class PublicaPersonajesComponent {
  
  personajes: Personajes[];
  mostrarDescripcion = false;

  vivo = "../../../../../assets/iconos/heartbeat.png";
  muerto = "../../../../../assets/iconos/tombstone.png";
  hombre = "../../../../../assets/iconos/male-gender.png";
  mujer = "../../../../../assets/iconos/female-gender.png";
  desconocido = "../../../../../assets/iconos/unknown.png";

  constructor() {
    this.personajes = [
      {
        id: 1,
        nombre: "Rick Sanchez",
        estado: "Alive",
        especie: "Human",
        img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        tipo: "",
        genero: "Male",
        origen: "Bepis 9",
        descripcion: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      },
      {
        id: 2,
        nombre: "Morty Smith",
        estado: "Alive",
        especie: "Human",
        img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        tipo: "",
        genero: "Male",
        origen: "Bepis 9",
        descripcion: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      },
      {
        id: 35,
        nombre: "Bepisian",
        estado: "Dead",
        especie: "Alien",
        img: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
        tipo: "Bepisian",
        genero: "unknown",
        "origen": "Bepis 9",
        "descripcion": "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      }
    ];
  }

  ngOnInit(){
    this.personajes.map(personaje => {
      if (personaje.estado === "Alive"){
        personaje.estado = this.vivo;
      } else {
        personaje.estado = this.muerto;
      }

      //
      if (personaje.genero === "Male"){
        personaje.genero = this.hombre;
      } else if(personaje.genero === "Female") {
        personaje.genero = this.mujer;
      } else {
        personaje.genero = this.desconocido;
      }
    })
  }

  mostrar() {
    if (this.mostrarDescripcion) {
      this.mostrarDescripcion = false;
    } else {
      this.mostrarDescripcion = true;
    }

  }

}
