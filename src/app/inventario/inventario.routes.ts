import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'homepage',
    title: 'Homepage',
    loadComponent: () => import('./components/home-page/home-page'),
  },
  {
    path: 'settings',
    title: 'Settings',
    loadComponent: () => import('./components/settings-page/settings-page'),
  },

];

export default routes;
