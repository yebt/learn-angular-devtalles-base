import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DrgnbllPageComponent } from './pages/drgnbll/drgnbll-page.component';

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
  // managment the 404 routers redirecting to base view
  {
    path: '**',
    redirectTo: ''
  },
];
