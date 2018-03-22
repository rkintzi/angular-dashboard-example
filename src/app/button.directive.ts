import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'a[btn]'
})
export class ButtonDirective {

    constructor(public ref: ViewContainerRef) {
        ref.element.nativeElement.href="#";
        ref.element.nativeElement.addEventListener('click', evt=>{
            evt.preventDefault();
        });

    }

}
