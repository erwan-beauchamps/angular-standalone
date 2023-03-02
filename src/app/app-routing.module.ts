import { GlobalComponent } from './global/global.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  },
  {
    path: 'elements',
    loadChildren: () => import('./elements-routes').then(
      (mod) => mod.elementsRoutes)
  },
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal-routing.module').then(
      (mod) => mod.InternalRoutingModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
