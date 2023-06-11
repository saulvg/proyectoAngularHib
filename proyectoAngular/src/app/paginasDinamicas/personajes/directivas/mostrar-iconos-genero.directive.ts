import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarIconosGenero]'
})
export class MostrarIconosGeneroDirective {

  // Rutas de los distintos iconos
  hombre = "../../../../assets/iconos/male-gender.png";
  mujer = "../../../../assets/iconos/female-gender.png";
  desconocido = "../../../../assets/iconos/unknown.png";

  @Input('appMostrarIconosGenero') genero: string = ''; // Recibe un dato de tipo string

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  /** Verifica el valor de gener y, si es igual a "Male", establece la ruta de la imagen hombre
   *  como atributo src del elemento HTML, sino, comprueba si es igual a 'Female', si no es ninguna de las anteriores
   *  lo establecera como desconocido */
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
