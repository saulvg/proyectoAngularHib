import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeConocidoDesconocido'
})
export class PipeConocidoDesconocidoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
