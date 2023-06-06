import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-workview',
  templateUrl: './user-workview.component.html',
  styleUrls: ['./user-workview.component.css']
})
export class UserWorkviewComponent {
  date!: string;
 
   constructor(@Inject(MAT_DIALOG_DATA) public data: { date: string }) {
    this.date = data.date;
    this.selectedValue = '';
   }
  editing = false;
  editWork() {
    this.editing = true;
  }

  updateWork() {
    // TODO: save profile data to server
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }

  selectedValue!: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


}
