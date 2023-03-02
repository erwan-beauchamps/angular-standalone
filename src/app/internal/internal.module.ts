import { NgModule } from '@angular/core';
import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';

@NgModule({
  declarations: [InternalComponent],
  imports: [InternalRoutingModule]
})
export class InternalModule {}
