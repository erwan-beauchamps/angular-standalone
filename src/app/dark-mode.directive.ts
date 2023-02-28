import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDarkMode]'
})
export class DarkModeDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.color = 'white';
  }

}
