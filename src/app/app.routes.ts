import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DrgnbllPageComponent } from './pages/drgnbll/drgnbll-page.component';
import { DrgnbllPageSuperComponent } from './pages/drgnbll-super/drgnbll-super-page.component';

export const routes: Routes = [
  {
    path:'',
    component: CounterPageComponent
  },
  {
    path:'hero',
    component: HeroPageComponent
  },
  {
    path:'drgnbll',
    component: DrgnbllPageComponent
  },
  {
    path:'drgnbll-super',
    component: DrgnbllPageSuperComponent
  },
  // managment the 404 routers redirecting to base view
  {
    path: '**',
    redirectTo: ''
  },
];
