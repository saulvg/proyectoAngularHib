import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatoTemporada'
})
export class FormatoTemporadaPipe implements PipeTransform {

  transform(temporadaEpisodio: string): string {

    const regex = /S(\d+)E(\d+)/;
    return temporadaEpisodio.replace(regex, (match: any, temp: string, episodio: string) => {
      return `Temporada -> ${temp} Episodio -> ${episodio}`;
    });

  }
}


