import { Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  @HostListener('click') toggleShow() {
    this.isShow = !this.isShow;
  }

  constructor() { }

}
