import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgRota]'
})
export class ImgRotaDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() img: string = ''

  @HostListener('error') handleError(): void {
    const natElement = this.elementRef.nativeElement

    if (this.img) {
      natElement.src = this.img
    } else {
      natElement.src = '../../../assets/img/img-rota.jpg'
    }


  }

}
