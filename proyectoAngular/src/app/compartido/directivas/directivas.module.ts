import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarCrudDirective } from './mostrar-crud.directive';
import { ListadoDirective } from './listado.directive';
import { LeerMasDirective } from './leer-mas.directive';
import { ImgRotaDirective } from './img-rota.directive';



@NgModule({
  declarations: [
    MostrarCrudDirective,
    ListadoDirective,
    LeerMasDirective,
    ImgRotaDirective,

  ],
  imports: [
    CommonModule
  ]
})
export class DirectivasModule { }
