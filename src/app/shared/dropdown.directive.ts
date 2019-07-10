import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggelOpen() {
    this.isOpen = !this.isOpen;
  }
}
