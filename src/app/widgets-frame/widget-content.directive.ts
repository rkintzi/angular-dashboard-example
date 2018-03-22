import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[widget]'
})
export class WidgetContentDirective {

 constructor(public viewContainerRef: ViewContainerRef) { }

}
