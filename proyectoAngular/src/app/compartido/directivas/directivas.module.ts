import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRotaDirective } from './img-rota.directive';



@NgModule({
  declarations: [
    ImgRotaDirective,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgRotaDirective
  ]
})
export class DirectivasModule { }
