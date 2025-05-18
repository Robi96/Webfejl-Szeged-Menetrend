import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './shared/guards/auth.guard';

export const routes: Routes = [

     { path: 'home',
          loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
     },

     { path: 'schedule',
          loadComponent: () => import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent), canActivate: [authGuard]},

     { path: 'login',
          loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent), canActivate: [publicGuard]},

     { path: 'signup',
          loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent), canActivate: [publicGuard]},
          
     { path: '', redirectTo: 'home', pathMatch: 'full' },
 
     // Wildcard útvonal - ha egyik útvonal sem egyezik
     { path: '**', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) }
     //{ path: '**', component: PageNotFoundComponent },
];
