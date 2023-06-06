import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserTimesheetComponent } from './user/user-timesheet/user-timesheet.component';
import { UserAddworkComponent } from './user/user-addwork/user-addwork.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserReportingComponent } from './user/user-reporting/user-reporting.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UserWorkviewComponent } from './user/user-timesheet/user-workview/user-workview.component';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { DescviewComponent } from './user/user-reporting/descview/descview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangepassComponent } from './user/user-profile/changepass/changepass.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserProfileComponent,
    UserTimesheetComponent,
    UserAddworkComponent,
    UserReportingComponent,
    UserWorkviewComponent,
    DescviewComponent,
    ChangepassComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule ,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    MatIconModule,
    NgxPaginationModule

   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
