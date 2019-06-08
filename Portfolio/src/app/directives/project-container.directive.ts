import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProjectContainer]'
})
export class ProjectContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
