import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Personajes } from '../interfaces/personajes';

@Directive({
  selector: '[appVivoMuerto]'
})
export class VivoMuertoDirective {

  vivo = "../../../../assets/iconos/heartbeat.png";
  muerto = "../../../../assets/iconos/tombstone.png";

  @Input('appVivoMuerto') vivoMuerto: string = '';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {

  }

  comprobarVivoMuerto(): void {
    // const imgElement = this.renderer.createElement('img');
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
