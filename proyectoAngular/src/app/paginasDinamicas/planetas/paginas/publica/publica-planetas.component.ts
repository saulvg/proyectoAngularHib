import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Planetas } from '../../interfaces/planetas';

@Component({
  selector: 'app-publica-planetas',
  templateUrl: './publica-planetas.component.html',
  styleUrls: ['./publica-planetas.component.css']
})
export class PublicaPlanetasComponent implements Planetas{
  public planetas:Planetas[];
  id!: number;
  nombre!: string;
  img!: string;
  dimension!: string;
  descripcion!: string;

  constructor(){
    this.planetas=[
      {
        id: 3,
        nombre: "Citadel of Ricks",
        img: "https://heavy.com/wp-content/uploads/2017/09/screen-shot-2017-04-01-at-8-02-30-pm.png",
        dimension: "unknown",
        descripcion: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      },
      {
        id: 1,
        nombre: "Earth (C-137)",
        img:"https://i.ytimg.com/vi/eMtShnoOvck/maxresdefault.jpg",
        dimension: "Dimension C-137",
        descripcion: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      },
      {
          id: 67,
          nombre: "Blips and Chitz",
          img:"https://www.eventeny.com/users/pic/22017-business-product-720v7ocarpdc1597333301-600.jpg",
          dimension: "Replacement Dimension",
          descripcion: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!"
      }
    ]
      
    
    
  }
}
