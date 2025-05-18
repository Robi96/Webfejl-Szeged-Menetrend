import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface Schedule {
  number: number;
  stops: Array<string>;
}

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatTableModule, MatIconModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  standalone: true
})
export class ScheduleComponent implements OnInit{
  @Input() title: string = 'Járat kiválasztása';
  @Output() vehicleAdded = new EventEmitter<Schedule>();
  newVehicleNumber: number = 0;
  newVehicleStop: string = "";
  selectedTheme: 'light' | 'dark' = 'light';
  selectedIndex: number = 0;
  selectedIndexAdd: number = 0;
  fontSize : number = 16;
  stops: any;
  schedule: Schedule[] = [
    {
        number: 2,
        stops: [
            'Európa liget',
            'Vértó',
            'Bálint Sándor utca',
            'Rókusi víztorony',
            'Szatymazi utca',
            'Vásárhelyi Pál utca',
            'Damjanich utca',
            'Tavasz utca',
            'Rókusi templom',
            'Anna-kút',
            'Széchenyi tér',
            'Somogyi utca',
            'Aradi vértanúk tere',
            'Bécsi körüt',
            'Bem utca',
            'Szeged vasútállomás'
        ]
    },
    {
        number: 3,
        stops: [
            'Tarján',
            'Budapesti körüt',
            'Deák Ferenc Gimnázium',
            'Rózsa utca',
            'Kecskeméti utca',
            'Brüsszeli körüt',
            'Szent György tér',
            'Glattfelder tér',
            'Anna-kút',
            'Károlyi utca',
            'Dugonics tér',
            'Londoni körüt',
            'Veresács utca',
            'Kálvária tér',
            'II. Kórház',
            'Vadaspark'
        ]
    }
  ];


  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  reload(index: number): void {
    this.selectedIndex = index;
  }
  addVehicle(): void{
    const newVehicle: Schedule = {
      number: this.newVehicleNumber,
      stops: []
    }
    this.schedule.push(newVehicle);
    this.vehicleAdded.emit(newVehicle);
    this.newVehicleNumber = 0;
  }
  addStop(index: number) {
    if(this.newVehicleStop.trim()){
      this.schedule[index].stops.push(this.newVehicleStop);
    }
  }
  trackById(index: number, item: Schedule): number {
    return item.number;
  }
}
