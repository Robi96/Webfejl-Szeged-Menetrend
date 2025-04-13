import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

export const routes: Routes = [

     { path: 'home', component: HomeComponent },

     { path: 'schedule', component: ScheduleComponent},

     { path: '', redirectTo: 'home', pathMatch: 'full' },
 
     // Wildcard útvonal - ha egyik útvonal sem egyezik
     { path: '**', component: HomeComponent }
     //{ path: '**', component: PageNotFoundComponent },
];
