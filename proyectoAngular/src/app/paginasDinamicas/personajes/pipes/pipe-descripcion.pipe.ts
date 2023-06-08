import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDescripcion'
})
export class PipeDescripcionPipe implements PipeTransform {

  transform(descripcion: string): string {
    if (descripcion.length > 50) {
      return descripcion.substring(0, 50) + '...';
    }
    return descripcion;
  }

}