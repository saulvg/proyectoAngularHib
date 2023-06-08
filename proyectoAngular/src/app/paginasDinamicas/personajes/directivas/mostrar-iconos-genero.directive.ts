import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarIconosGenero]'
})
export class MostrarIconosGeneroDirective {

  hombre = "../../../../assets/iconos/male-gender.png";
  mujer = "../../../../assets/iconos/female-gender.png";
  desconocido = "../../../../assets/iconos/unknown.png";

  @Input('appMostrarIconosGenero') genero: string = '';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  comprobarGenero(): void {
    if (this.genero === 'Male') {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.hombre);
    } else if (this.genero === 'Female') {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.mujer);
    } else {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.desconocido);
    }
  }

  ngOnInit() {
    this.comprobarGenero();
  }
}
