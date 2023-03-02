import { CircleComponent } from './circle/circle.component';
import { Routes } from '@angular/router';
import { SquareComponent } from './square/square.component';

export const elementsRoutes: Routes = [
  {
    path: '',
    component: SquareComponent
  },
  {
    path: 'circle',
    component: CircleComponent
  },
];