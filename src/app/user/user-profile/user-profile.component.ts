import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  editing = false;
  firstName = 'John';
  lastName = 'Doe';
  dob = '1990-01-01';
  department = 'IT';
  reportingManager = 'Jane Doe';
  jobTitle = 'Software Developer';
  employeeId = '12345';
  email = 'johndoe@example.com';
  contactNo = '123-456-7890';

  editProfile() {
    this.editing = true;
  }

  saveProfile() {
    // TODO: save profile data to server
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }

}
