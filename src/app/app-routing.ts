import { Routes } from '@angular/router';
import { GlobalComponent } from './global/global.component';

export const routes: Routes = [
  {
    path: '',
    component: GlobalComponent
  },
  {
    path: 'global',
    redirectTo: ''
  },
  {
    path: 'details',
    loadComponent: () => import('./global/details/details.component').then(
      (mod) => mod.DetailsComponent)
  }
];
