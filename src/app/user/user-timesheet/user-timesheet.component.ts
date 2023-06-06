import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { UserAddworkComponent } from '../user-addwork/user-addwork.component';
import { UserWorkviewComponent } from './user-workview/user-workview.component';

interface WorkData {
  project: string;
  time: string;
  hours: number;
  status: string;
}


@Component({
  selector: 'app-user-timesheet',
  templateUrl: './user-timesheet.component.html',
  styleUrls: ['./user-timesheet.component.css']
})

export class UserTimesheetComponent {
  // @ViewChild('dropdown') dropdown: ElementRef<HTMLUListElement>;

  popupOpen = false;

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }

  firstday!: string;
  secday!: string;
  thrtday!: string;
  fouday!: string;
  fivtday!: string;
  sixtday!: string;
  lastday!: string;
  currentWeek: Date = new Date();
  weekDates: any;

  constructor(public dialog: MatDialog,private router: Router,private cd: ChangeDetectorRef) {
    
     this.updateWeek();
  }

  openDialog(param: any): void {
    const dialogRef = this.dialog.open(UserAddworkComponent, {
      data: { date: param }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ViewDialog(param: any): void {
    const dialogRef = this.dialog.open(UserWorkviewComponent, {
      data: { date: param }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  public updateWeek(): void {
    const dayOfWeek: number = this.currentWeek.getDay();
    const monday: Date = new Date(this.currentWeek);
    monday.setDate(this.currentWeek.getDate() - dayOfWeek + 1);

    const tueday: Date = new Date(monday);
    tueday.setDate(monday.getDate() + 1);

    const wenday: Date = new Date(monday);
    wenday.setDate(monday.getDate() + 2);

    const thurday: Date = new Date(monday);
    thurday.setDate(monday.getDate() + 3);

    const friday: Date = new Date(monday);
    friday.setDate(monday.getDate() + 4);

    const satday: Date = new Date(monday);
    satday.setDate(monday.getDate() + 5);

    const sunday: Date = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-IN', options);

    this.firstday = formatter.format(monday);
    this.secday = formatter.format(tueday);
    this.thrtday = formatter.format(wenday);
    this.fouday = formatter.format(thurday);
    this.fivtday = formatter.format(friday);
    this.sixtday = formatter.format(satday);
    this.lastday = formatter.format(sunday);
  }

  public previousWeek(): void {
    this.currentWeek.setDate(this.currentWeek.getDate() - 7);
    this.updateWeek();
  }

  public nextWeek(): void {
    this.currentWeek.setDate(this.currentWeek.getDate() + 7);
    this.updateWeek();
  }
  size(contentId: string): void {
    var height = 15; // set the height dynamically
    var myElement = document.getElementById(contentId);
    myElement!.style.height = height + "px";
  }

  dropdownOpen: number | null = null;
  isDropdownOpen: boolean[] = [false, false]; // initialize as false for each dropdown

  toggleDropdown(dropdownNumber: number) {
    if (this.dropdownOpen === dropdownNumber) {
      this.dropdownOpen = 0;
    } else {
      this.dropdownOpen = dropdownNumber;
    }
    for (let i = 1; i <= 7; i++) {
      if (i !== dropdownNumber) {
        this.isDropdownOpen[i - 1] = false;
      }
    }
    this.isDropdownOpen[dropdownNumber - 1] = true;
  }
  workData: WorkData[] = [
    { project: 'Project A', time: '10:00 AM', hours:3 , status: 'Completed' },
    { project: 'Project A', time: '10:00 AM - 12:00 pm', hours: 2, status: 'Completed' },
    { project: 'Project B', time: '02:00 PM - 04:00 PM', hours: 2, status: 'In progress' },
    { project: 'Project C', time: '09:00 AM - 10:00 AM', hours: 1, status: 'Completed' },
  ];

  getTotalHours(data: WorkData[]): number {
    let totalHours = 0;
    for (const item of data) {
      totalHours += item.hours;
    }
    return totalHours;
  }

  logTotalHours() {
    const totalHours = this.getTotalHours(this.workData);
    console.log('Total hours:', totalHours);
  }

  showConfirmationDialog = false;

  openConfirmationDialog() {
    this.showConfirmationDialog = true;
  }

  closeConfirmationDialog() {
    this.showConfirmationDialog = false;
  }

  delete() {
    // Call delete API here
    // ...
    this.closeConfirmationDialog();
  }
}







