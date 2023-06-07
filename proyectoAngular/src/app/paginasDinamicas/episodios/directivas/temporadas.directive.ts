import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemporadas]'
})
export class TemporadasDirective {

  @Input('appTemporadas') temporadas: string = ''

  constructor(private elementRef: ElementRef) { }

  formatearTextoTemporada(): void {
    if (this.temporadas) {
      const regex = /S(\d+)E(\d+)/;
      this.elementRef.nativeElement.textContent = this.temporadas.replace(regex, (match: any, temporada: string, episodio: string) => {
        return `Temporada -> ${temporada} Episodio -> ${episodio}`;
      });
    }

  };

  ngOnInit() {
    this.formatearTextoTemporada()
  };
};
