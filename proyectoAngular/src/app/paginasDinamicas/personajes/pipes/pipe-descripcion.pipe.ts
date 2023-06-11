import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDescripcion'
})
export class PipeDescripcionPipe implements PipeTransform {

  /** Este pipe reduce la descripcion original a una descripcion
   * de tamaño reducido de 70 caracteres y le añade '...' al final
   */
  transform(descripcion: string): string {
    if (descripcion.length > 70) {
      return descripcion.substring(0, 70) + '...';
    }
    return descripcion;
  }

}