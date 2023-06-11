import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Personajes } from '../interfaces/personajes';

@Directive({
  selector: '[appVivoMuerto]'
})
export class VivoMuertoDirective {

  vivo = "../../../../assets/iconos/heartbeat.png"; // Ruta del icono que indica 'vivo'
  muerto = "../../../../assets/iconos/tombstone.png"; // Ruta del icono que indica 'muerto'

  // La directiva recibe un valor a través de la entrada appVivoMuerto, que es de tipo string.
  @Input('appVivoMuerto') vivoMuerto: string = '';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  /** Verifica el valor de vivoMuerto y, si es igual a "Alive", establece la ruta de la imagen vivoç
   *  como atributo src del elemento HTML utilizando el método setAttribute() del Renderer2.
   *  En caso contrario, se establece la ruta de la imagen muerto. */
  comprobarVivoMuerto(): void {
    if (this.vivoMuerto === 'Alive') {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.vivo);
    } else {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.muerto);

    }
  }

  ngOnInit() {
    this.comprobarVivoMuerto();
  }
}
