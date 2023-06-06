import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent {
  Empid!: number;
  newPassword!: string;
  confirmPassword!: string;
  passwordsMatch: boolean = false;
  newshowPassword: boolean = false;
  conshowPassword: boolean = false;
  empid!: number;
  roles!: string;


  constructor(public dialogRef: MatDialogRef<ChangepassComponent>, @Inject(MAT_DIALOG_DATA) public data: { empid: any }) {

    this.empid = data.empid;
  }
  OnInit() {
    this.empid;
  }

  checkPasswordMatch(): void {
    this.passwordsMatch = this.newPassword === this.confirmPassword ? true : false;
  }

  toggleNewPasswordVisibility(): void {
    this.newshowPassword = !this.newshowPassword;
  }
  toggleConPasswordVisibility(): void {
    this.conshowPassword = !this.conshowPassword;
  }

  // changepass() {
  //   this.LSer.ChangePaaaword(this.empid, this.confirmPassword).subscribe(
  //     (response) => {

  //       this.dialogRef.close(response);
  //       console.log(response);
  //     }, (error) => {
  //     console.log(error);
  //   }
  //   );
  // }
}
