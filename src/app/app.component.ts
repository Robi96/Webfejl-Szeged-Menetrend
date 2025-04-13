import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beadando';
  page = "home";
  fontSize: number = 16;

  selectedTheme: 'light' | 'dark' = 'light';

  switchPage(selectedPage:string){
    this.page = selectedPage;
  }
}
