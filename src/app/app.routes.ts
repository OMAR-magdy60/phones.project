import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { About } from './about/about';
import { omarGuard } from './omar-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [omarGuard] },
  { path: 'about', component: About, canActivate: [omarGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
