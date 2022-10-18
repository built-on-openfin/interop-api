import { NgModule } from '@angular/core';
import { StencilAngularComponent } from './stencil-angular.component';
import { DIRECTIVES } from '.';

@NgModule({
  declarations: [
    StencilAngularComponent,
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    StencilAngularComponent,
    ...DIRECTIVES
  ]
})
export class StencilAngularModule { }
