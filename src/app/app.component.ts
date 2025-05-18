import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MenuComponent, CommonModule, FormsModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  isLoggedIn = false;
  title = 'beadando';
  page = "home";
  fontSize: number = 16;
  private authSubscription?: Subscription;
  constructor(private authService: AuthService){}

  selectedTheme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
  logOut(): void {
    this.authService.signOut();
  }
}
