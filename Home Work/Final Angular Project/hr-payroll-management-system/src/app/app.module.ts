import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


import { LocationComponent } from './components/location/viewlocation/location.component';
import { CreatelocationComponent } from './components/location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './components/location/updatelocation/updatelocation.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/createprofile/registration.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { UserprofileComponent } from './authentication/userprofile/userprofile.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { CreateAttendanceComponent } from './components/attendance/createattendance/createattendance.component';
import { EditattendanceComponent } from './components/attendance/editattendance/editattendance.component';
import { ListattendanceComponent } from './components/attendance/listattendance/listattendance.component';
import { ViewattendanceComponent } from './components/attendance/viewattendance/viewattendance.component';
import { ForgetpasswordComponent } from './authentication/forgetpassword/forgetpassword.component';
import { UnauthorizedComponent } from './authentication/unauthorized/unauthorized.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BreadcrumbComponent } from './dashboard/breadcrumb/breadcrumb.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CreatedepartmentComponent } from './components/department/createdepartment/createdepartment.component';
import { EditdepartmentComponent } from './components/department/editdepartment/editdepartment.component';
import { ViewdepartmentComponent } from './components/department/viewdepartment/viewdepartment.component';
import { ListdepartmentComponent } from './components/department/listdepartment/listdepartment.component';
import { CreateemployeeComponent } from './components/employee/createemployee/createemployee.component';
import { EditemployeeComponent } from './components/employee/editemployee/editemployee.component';
import { ListemployeeComponent } from './components/employee/listemployee/listemployee.component';
import { ViewemployeeComponent } from './components/employee/viewemployee/viewemployee.component';
import { ErrorComponent } from './errorhandling/error/error.component';
import { NotfoundComponent } from './errorhandling/notfound/notfound.component';
import { CreateleaveComponent } from './components/leave/createleave/createleave.component';
import { EditleaveComponent } from './components/leave/editleave/editleave.component';
import { ListleaveComponent } from './components/leave/listleave/listleave.component';
import { CreatePayrollComponent } from './components/payroll/createpayroll/createpayroll.component';
import { EditpayrollComponent } from './components/payroll/editpayroll/editpayroll.component';
import { ListpayrollComponent } from './components/payroll/listpayroll/listpayroll.component';
import { ViewpayrollComponent } from './components/payroll/viewpayroll/viewpayroll.component';
import { CreateperformanceComponent } from './components/performance/createperformance/createperformance.component';
import { EditperformanceComponent } from './components/performance/editperformance/editperformance.component';
import { ListperformanceComponent } from './components/performance/listperformance/listperformance.component';
import { ViewperformanceComponent } from './components/performance/viewperformance/viewperformance.component';
import { CreatefeedbackComponent } from './components/feedback/createfeedback/createfeedback.component';
import { EditfeedbackComponent } from './components/feedback/editfeedback/editfeedback.component';
import { ViewfeedbackComponent } from './components/feedback/viewfeedback/viewfeedback.component';
import { ListfeedbackComponent } from './components/feedback/listfeedback/listfeedback.component';
import { CreateemployeereportComponent } from './reports/employeereport/createemployeereport/createemployeereport.component';
import { EditemployeereportComponent } from './reports/employeereport/editemployeereport/editemployeereport.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent,
    UserprofileComponent,
    FooterComponent,
    HeaderComponent,
    CreateAttendanceComponent,
    EditattendanceComponent,
    ListattendanceComponent,
    ViewattendanceComponent,
    ForgetpasswordComponent,
    UnauthorizedComponent,
    DashboardComponent,
    BreadcrumbComponent,
    NotificationComponent,
    SidebarComponent,
    CreatedepartmentComponent,
    EditdepartmentComponent,
    ViewdepartmentComponent,
    ListdepartmentComponent,
    CreateemployeeComponent,
    EditemployeeComponent,
    ListemployeeComponent,
    ViewemployeeComponent,
    ErrorComponent,
    NotfoundComponent,
    CreateleaveComponent,
    EditleaveComponent,
    ListleaveComponent,
    CreatePayrollComponent,
    EditpayrollComponent,
    ListpayrollComponent,
    ViewpayrollComponent,
    CreateperformanceComponent,
    EditperformanceComponent,
    ListperformanceComponent,
    ViewperformanceComponent,
    CreatefeedbackComponent,
    EditfeedbackComponent,
    ViewfeedbackComponent,
    ListfeedbackComponent,
    CreateemployeereportComponent,
    EditemployeereportComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }