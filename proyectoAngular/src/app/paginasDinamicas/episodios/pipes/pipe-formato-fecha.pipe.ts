import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';


@Pipe({
  name: 'pipeFormatoFecha'
})
export class PipeFormatoFechaPipe implements PipeTransform {

  transform(fecha: string): string {
    return format(new Date(fecha), 'dd MMMM yyyy')
  }


}
