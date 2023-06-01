import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatoFecha'
})
export class PipeFormatoFechaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
