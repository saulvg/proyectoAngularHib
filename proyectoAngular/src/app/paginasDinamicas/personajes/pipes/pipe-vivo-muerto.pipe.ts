import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeVivoMuerto'
})
export class PipeVivoMuertoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
