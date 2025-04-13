import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent }
];
