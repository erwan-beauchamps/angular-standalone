import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { GlobalComponent } from './global.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    GlobalComponent,
    DetailsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GlobalComponent,
    DetailsComponent
  ]
})
export class GlobalModule { }
