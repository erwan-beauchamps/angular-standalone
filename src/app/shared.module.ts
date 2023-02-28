import { NgModule } from '@angular/core';
import { DarkModeDirective } from './dark-mode.directive';

@NgModule({
  declarations: [
    DarkModeDirective,
  ],
  exports: [
    DarkModeDirective,
  ]
})
export class SharedModule { }
