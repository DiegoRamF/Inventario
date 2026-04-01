import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inventario',
    title: 'Inventario',
    loadComponent: () => import('./inventario/inventario'),
  },
  {
    path: '**',
    redirectTo: 'inventario'
  }
];
