import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-addwork',
  templateUrl: './user-addwork.component.html',
  styleUrls: ['./user-addwork.component.css']
})
export class UserAddworkComponent implements OnInit {

  @ViewChild('dialogContent')dialogContent!: ElementRef;

  date!: string;
  constructor(public dialogRef: MatDialogRef<UserAddworkComponent>,@Inject(MAT_DIALOG_DATA) public data: any)  {
    this.date = data.date;
    this.selectedValue = '';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onScroll(event: Event): void {
    const scrollElement = event.target as HTMLElement;
  }

  selectedValue: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      event.stopPropagation();
      const scrollContainer = document.querySelector(
        '.mat-dialog-content'
      ) as HTMLElement;
      const scrollAmount = event.key === 'ArrowDown' ? 50 : -50;
      scrollContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  }
  }




