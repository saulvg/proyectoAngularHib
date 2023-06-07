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

  comprobar(): void {
    const imgElement = this.renderer.createElement('img');
    if (this.vivoMuerto === 'Alive') {
      this.renderer.setAttribute(imgElement, 'src', this.vivo);
    } else {
      this.renderer.setAttribute(imgElement, 'src', this.muerto);

    }
    this.renderer.appendChild(this.elemRef.nativeElement, imgElement);
  }

  ngOnInit() {
    this.comprobar();
  }

  // hombre = "../../../../assets/iconos/male-gender.png";
  // mujer = "../../../../assets/iconos/female-gender.png";
  // desconocido = "../../../../assets/iconos/unknown.png";

  // constructor(private elementRef: ElementRef) { }

  // ngAfterViewInit() {
  //   this.mostrarIconos();
  // }

  // mostrarIconos() {
  //   this.personajes.map(valor => {
  //     if (valor.estado === "Alive") {
  //       valor.estado = this.vivo;
  //     } else {
  //       valor.estado = this.muerto;
  //     }

  //     if (valor.genero === "Male") {
  //       valor.genero = this.hombre;
  //     } else if (valor.genero === "Female") {
  //       valor.genero = this.mujer;
  //     } else {
  //       valor.genero = this.desconocido;
  //     }
  //   });
  // }
}
