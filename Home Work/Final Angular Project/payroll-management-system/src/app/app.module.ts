import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeeDetailComponent } from './employee/employeedetail/employeedetail.component';
import { EmployeeCreateComponent } from './employee/employeecreate/employeecreate.component';
import { EmployeeeditComponent } from './employee/employeeedit/employeeedit.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { AttendancelistComponent } from './attendance/attendancelist/attendancelist.component';
import { AttendancecreateComponent } from './attendance/attendancecreate/attendancecreate.component';
import { AttendanceeditComponent } from './attendance/attendanceedit/attendanceedit.component';
import { LeavelistComponent } from './leave/leavelist/leavelist.component';
import { LeavecreateComponent } from './leave/leavecreate/leavecreate.component';
import { LeaveeditComponent } from './leave/leaveedit/leaveedit.component';
import { PerformancelistComponent } from './performance/performancelist/performancelist.component';
import { PerformancecreateComponent } from './performance/performancecreate/performancecreate.component';
import { PerformanceeditComponent } from './performance/performanceedit/performanceedit.component';
import { PerformancedetailComponent } from './performance/performancedetail/performancedetail.component';
import { PayrolllistComponent } from './payroll/payrolllist/payrolllist.component';
import { PayrollcreateComponent } from './payroll/payrollcreate/payrollcreate.component';
import { PayrolleditComponent } from './payroll/payrolledit/payrolledit.component';
import { PayrolldetailComponent } from './payroll/payrolldetail/payrolldetail.component';
import { NavbarComponent } from './commonutility/navbar/navbar.component';
import { SidebarComponent } from './commonutility/sidebar/sidebar.component';
import { DashboardComponent } from './commonutility/dashboard/dashboard.component';
import { ProfileComponent } from './commonutility/profile/profile.component';
import { NotificationComponent } from './commonutility/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './errorhandling/notfound/notfound.component';
import { ErrorComponent } from './errorhandling/error/error.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './commonutility/home/home.component';
import { AttendanceviewComponent } from './attendance/attendanceview/attendanceview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BreadcrumbComponent } from './commonutility/breadcrumb/breadcrumb.component';
import { UnauthorizedComponent } from './authentication/unauthorized/unauthorized.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './authentication/admin/admin.component';
import { UserComponent } from './authentication/user/user.component';
import { EmployeeReportComponent } from './report/employee-report/employee-report.component';
import { LeaveReportComponent } from './report/leave-report/leave-report.component';
import { PayrollReportComponent } from './report/payroll-report/payroll-report.component';
import { FeedbackReportComponent } from './report/feedback-report/feedback-report.component';
import { FooterComponent } from './commonutility/footer/footer.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeeditComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AttendancelistComponent,
    AttendancecreateComponent,
    AttendanceeditComponent,
    LeavelistComponent,
    LeavecreateComponent,
    LeaveeditComponent,
    PerformancelistComponent,
    PerformancecreateComponent,
    PerformanceeditComponent,
    PerformancedetailComponent,
    PayrolllistComponent,
    PayrollcreateComponent,
    PayrolleditComponent,
    PayrolldetailComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    NotificationComponent,
    NotfoundComponent,
    ErrorComponent,
    HomeComponent,
    AttendanceviewComponent,
    BreadcrumbComponent,
    UnauthorizedComponent,
    AdminComponent,
    UserComponent,
    EmployeeReportComponent,
    LeaveReportComponent,
    PayrollReportComponent,
    FeedbackReportComponent,
    FooterComponent,
    CreateDepartmentComponent,
    ViewDepartmentComponent,
    ListDepartmentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
