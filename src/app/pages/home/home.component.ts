import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
isLoggedIn = false;
selectedTheme: 'light' | 'dark' = 'light';
fontSize: number = 16;

constructor(private router: Router) {}
ngOnInit(): void {
    this.checkLoginStatus();
  }

checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
}
changePage() {
    this.router.navigateByUrl("/schedule");
  }
changeLogin(){
 this.router.navigateByUrl("/login");
}
changeSignup(){
 this.router.navigateByUrl("/signup");
}
}
