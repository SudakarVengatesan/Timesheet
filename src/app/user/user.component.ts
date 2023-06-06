import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  showTimeSheet: boolean = true;
  showUserProfile: boolean = false;
  showUserReport:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTimeSheet() {
    this.showTimeSheet = true;
    this.showUserProfile = false;
    this.showUserReport=false;
  }

  toggleUserProfile() {
    this.showTimeSheet = false;
    this.showUserProfile = true;
    this.showUserReport=false;
  }
  toggleUserReport() {
    this.showTimeSheet = false;
    this.showUserProfile = false;
    this.showUserReport=true;
  }
}
