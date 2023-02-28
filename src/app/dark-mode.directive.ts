import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDarkMode]',
  standalone: true
})
export class DarkModeDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.color = 'white';
  }

}
