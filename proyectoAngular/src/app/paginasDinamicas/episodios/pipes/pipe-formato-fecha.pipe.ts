import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';


@Pipe({
  name: 'pipeFormatoFecha'
})
export class PipeFormatoFechaPipe implements PipeTransform {

  transform(fecha: string): string {
    try {
      if (fecha) {
        // Modifica el valor como desees
        const nuevoValor = format(new Date(fecha), 'dd MMMM yyyy')

        // Asigna el nuevo valor al elemento del DOM
        return nuevoValor;
      }
    } catch (error) {
      console.error('Algo ha salido mal', error);
      return fecha
    }
    return '';
  }

}
