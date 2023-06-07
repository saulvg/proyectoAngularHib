import { Directive, ElementRef, Input } from '@angular/core';
import { format } from 'date-fns';

@Directive({
  selector: '[appFormatearFecha]'
})
export class FormatearFechaDirective {

  @Input('appFormatearFecha') date: string = '';

  constructor(private elementRef: ElementRef) { }

  formatearFecha(): void {

    if (this.date) {
      // Modifica el valor como desees
      const nuevoValor = format(new Date(this.date), 'dd MMMM yyyy')

      // Asigna el nuevo valor al elemento del DOM
      this.elementRef.nativeElement.textContent = nuevoValor;
    }

  }
  ngOnInit() {
    this.formatearFecha()


  }
}
