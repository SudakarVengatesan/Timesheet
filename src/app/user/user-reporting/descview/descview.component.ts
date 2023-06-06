import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-descview',
  templateUrl: './descview.component.html',
  styleUrls: ['./descview.component.css']
})
export class DescviewComponent {
  desc!:string
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.desc=data.desc
  }

}
