import { Component } from '@angular/core';
import { Equipo } from './interfaces/equipo';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})

export class QuienesSomosComponent/*  implements Equipo */ {

  equipo:Equipo[];

  /* nombre="";
  img="";
  descripcion= ""; */

  constructor(){
    this.equipo = [
      {
        nombre: 'Adrian Sole',
        img: "../../../assets/img/imgAdrian.jpeg",
        alt:"imgAdrian",
        descripcion:'Descripcion generica para usuario',
        linkGit:"https://github.com/AdrianSole"
      },
      {
        nombre:'Selene Vila',
        img: '../../../assets/img/imgSelene.jpeg',
        alt:"imgAdrian",
        descripcion:'Descripcion generica para usuario',
        linkGit:"https://github.com/MSelene"
      },
      {
        nombre:'Saul Vaquero',
        img: '../../../assets/img/imgSaul.jpeg',
        alt:"imgAdrian",
        descripcion:'Descripcion generica para usuario',
        linkGit:"https://github.com/saulvg"
      }
    ]
   
  }
  
}
