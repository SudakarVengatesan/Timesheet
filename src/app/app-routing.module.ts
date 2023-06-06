import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserTimesheetComponent } from './user/user-timesheet/user-timesheet.component';
import { LoginComponent } from './login/login.component';
import { UserAddworkComponent } from './user/user-addwork/user-addwork.component';
import { CommonModule } from '@angular/common';
import { UserReportingComponent } from './user/user-reporting/user-reporting.component';
import { UserWorkviewComponent } from './user/user-timesheet/user-workview/user-workview.component';
import { ChangepassComponent } from './user/user-profile/changepass/changepass.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'usertime',component:UserTimesheetComponent},
  {path:'userwork',component:UserAddworkComponent},
  // {path:'userreport',component:UserReportingComponent},
  // {path:'userview',component:UserWorkviewComponent},
  // {path:'userreport/changes',component:ChangepassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
