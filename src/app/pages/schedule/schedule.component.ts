import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScheduleObject } from '../../shared/menu/schedule';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit{
  ScheduleObject = ScheduleObject;
  selectedTheme: 'light' | 'dark' = 'light';
  selectedIndex: number = 0;
  fontSize : number = 16;

  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  reload(index: number): void {
    this.selectedIndex = index;
  }
}
