import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inventario',
    loadComponent: () => import('./inventario/inventario'),
    loadChildren: () => import('./inventario/inventario.routes'),
  },
  {
    path: '**',
    redirectTo: 'inventario'
  }
];
