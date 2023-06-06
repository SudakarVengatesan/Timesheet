import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DescviewComponent } from './descview/descview.component';

interface Option {
  label: string;
  value: any;
}
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-reporting',
  templateUrl: './user-reporting.component.html',
  styleUrls: ['./user-reporting.component.css']
})
export class UserReportingComponent implements OnInit {
  optionsVisible1!: boolean;
  optionsVisible2!: boolean;

  Description!:string;
constructor(public dialog: MatDialog){}
ngOnInit(): void {
 
  
}
openDialog(descdata:any): void {
  const dialogRef = this.dialog.open(DescviewComponent, {
    width: '350px',
    data: {desc: descdata}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];
isDropdownOpen1 = false;
isDropdownOpen2 = false;
currentPage = 1;
itemsPerPage = 6;

updatePageSize() {
  this.currentPage = 1; // Reset the current page when the page size changes
}
  options1 = ['Option 1', 'Option 2', 'Option 3'];
  options2 = ['Option A', 'Option B', 'Option C'];

  selectedOption1!: string;
  selectedOption2!: string;

  toggleOptions1() {
    this.optionsVisible1 = !this.optionsVisible1;
  }

  toggleOptions2() {
    this.optionsVisible2 = !this.optionsVisible2;
  }

  toggleIcon1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  toggleIcon2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }

  selectOption1(option: string) {
    this.selectedOption1 = option;
    this.optionsVisible1 = false;
  }

  selectOption2(option: string) {
    this.selectedOption2 = option;
    this.optionsVisible2 = false;
  }
  items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
    { id: 4, name: 'Item 4', description: 'Description of Item 4' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    // ... more items
  ];
  
 
}
