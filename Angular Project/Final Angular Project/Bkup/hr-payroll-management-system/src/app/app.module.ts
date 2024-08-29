import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatelocationComponent } from './components/location/createlocation/createlocation.component';
import { LoginComponent } from './authentication/login/login.component';

import { HomeComponent } from './template/home/home.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { CreateAttendanceComponent } from './components/attendance/createattendance/createattendance.component';
import { EditattendanceComponent } from './components/attendance/editattendance/editattendance.component';
import { ListattendanceComponent } from './components/attendance/listattendance/listattendance.component';
import { ViewattendanceComponent } from './components/attendance/viewattendance/viewattendance.component';
import { ForgetpasswordComponent } from './authentication/forgetpassword/forgetpassword.component';
import { UnauthorizedComponent } from './authentication/unauthorized/unauthorized.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { BreadcrumbComponent } from './template/breadcrumb/breadcrumb.component';
import { NotificationComponent } from './template/notification/notification.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
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
import { CreateattendancereportComponent } from './reports/attendancereport/createattendancereport/createattendancereport.component';
import { EditattendancereportComponent } from './reports/attendancereport/editattendancereport/editattendancereport.component';
import { ListattendancereportComponent } from './reports/attendancereport/listattendancereport/listattendancereport.component';
import { ViewattendancereportComponent } from './reports/attendancereport/viewattendancereport/viewattendancereport.component';
import { ViewdepartmentreportComponent } from './reports/departmentreport/viewdepartmentreport/viewdepartmentreport.component';
import { CreatedepartmentreportComponent } from './reports/departmentreport/createdepartmentreport/createdepartmentreport.component';
import { ListdepartmentreportComponent } from './reports/departmentreport/listdepartmentreport/listdepartmentreport.component';
import { EditdepartmentreportComponent } from './reports/departmentreport/editdepartmentreport/editdepartmentreport.component';
import { ListemployeereportComponent } from './reports/employeereport/listemployeereport/listemployeereport.component';
import { ViewemployeereportComponent } from './reports/employeereport/viewemployeereport/viewemployeereport.component';
import { ViewfeedbackreportComponent } from './reports/feedbackreport/viewfeedbackreport/viewfeedbackreport.component';
import { CreatefeedbackreportComponent } from './reports/feedbackreport/createfeedbackreport/createfeedbackreport.component';
import { EditfeedbackreportComponent } from './reports/feedbackreport/editfeedbackreport/editfeedbackreport.component';
import { ListfeedbackreportComponent } from './reports/feedbackreport/listfeedbackreport/listfeedbackreport.component';
import { ListleavereportComponent } from './reports/leavereport/listleavereport/listleavereport.component';
import { CreateleavereportComponent } from './reports/leavereport/createleavereport/createleavereport.component';
import { EditleavereportComponent } from './reports/leavereport/editleavereport/editleavereport.component';
import { ViewleavereportComponent } from './reports/leavereport/viewleavereport/viewleavereport.component';
import { ViewlocationreportComponent } from './reports/locationreport/viewlocationreport/viewlocationreport.component';
import { CreatelocationreportComponent } from './reports/locationreport/createlocationreport/createlocationreport.component';
import { ListlocationreportComponent } from './reports/locationreport/listlocationreport/listlocationreport.component';
import { EditlocationreportComponent } from './reports/locationreport/editlocationreport/editlocationreport.component';
import { EditpayrollreportComponent } from './reports/payrollreport/editpayrollreport/editpayrollreport.component';
import { ListpayrollreportComponent } from './reports/payrollreport/listpayrollreport/listpayrollreport.component';
import { CreatepayrollreportComponent } from './reports/payrollreport/createpayrollreport/createpayrollreport.component';
import { ViewpayrollreportComponent } from './reports/payrollreport/viewpayrollreport/viewpayrollreport.component';
import { ViewperformancereportComponent } from './reports/performancereport/viewperformancereport/viewperformancereport.component';
import { CreateperformancereportComponent } from './reports/performancereport/createperformancereport/createperformancereport.component';
import { EditperformancereportComponent } from './reports/performancereport/editperformancereport/editperformancereport.component';
import { ListperformancereportComponent } from './reports/performancereport/listperformancereport/listperformancereport.component';
import { ListlocationComponent } from './components/location/listlocation/listlocation.component';
import { ViewlocationComponent } from './components/location/viewlocation/viewlocation.component';
import { CreateadminComponent } from './components/admin/createadmin/createadmin.component';
import { EditadminComponent } from './components/admin/editadmin/editadmin.component';
import { ListadminComponent } from './components/admin/listadmin/listadmin.component';
import { ViewadminComponent } from './components/admin/viewadmin/viewadmin.component';
import { CreatemanagerComponent } from './components/manager/createmanager/createmanager.component';
import { EditmanagerComponent } from './components/manager/editmanager/editmanager.component';
import { ListmanagerComponent } from './components/manager/listmanager/listmanager.component';
import { ViewmanagerComponent } from './components/manager/viewmanager/viewmanager.component';
import { ViewleaveComponent } from './components/leave/viewleave/viewleave.component';
import { EditlocationComponent } from './components/location/editlocation/editlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatelocationComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
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
    CreateattendancereportComponent,
    EditattendancereportComponent,
    ListattendancereportComponent,
    ViewattendancereportComponent,
    ViewdepartmentreportComponent,
    CreatedepartmentreportComponent,
    ListdepartmentreportComponent,
    EditdepartmentreportComponent,
    ListemployeereportComponent,
    ViewemployeereportComponent,
    ViewfeedbackreportComponent,
    CreatefeedbackreportComponent,
    EditfeedbackreportComponent,
    ListfeedbackreportComponent,
    ListleavereportComponent,
    CreateleavereportComponent,
    EditleavereportComponent,
    ViewleavereportComponent,
    ViewlocationreportComponent,
    CreatelocationreportComponent,
    ListlocationreportComponent,
    EditlocationreportComponent,
    EditpayrollreportComponent,
    ListpayrollreportComponent,
    CreatepayrollreportComponent,
    ViewpayrollreportComponent,
    ViewperformancereportComponent,
    CreateperformancereportComponent,
    EditperformancereportComponent,
    ListperformancereportComponent,
    ListlocationComponent,
    ViewlocationComponent,
    CreateadminComponent,
    EditadminComponent,
    ListadminComponent,
    ViewadminComponent,
    CreatemanagerComponent,
    EditmanagerComponent,
    ListmanagerComponent,
    ViewmanagerComponent,
    ViewleaveComponent,
    EditlocationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
