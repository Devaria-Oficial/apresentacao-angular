import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransformarData]'
})
export class TransformarDataDirective {
  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('focus')
  onFocus() {
    this.element.nativeElement.type = 'date';
  }

  @HostListener('blur')
  onBlur() {
    this.element.nativeElement.type = 'text';
  }
}
