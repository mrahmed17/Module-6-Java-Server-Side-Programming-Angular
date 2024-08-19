import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AttendanceviewComponent } from './attendance/attendanceview/attendanceview.component';
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
import { DashboardComponent } from './commonutility/dashboard/dashboard.component';
import { NotfoundComponent } from './errorhandling/notfound/notfound.component';
import { ProfileComponent } from './commonutility/profile/profile.component';
import { NavbarComponent } from './commonutility/navbar/navbar.component';
import { SidebarComponent } from './commonutility/sidebar/sidebar.component';
import { NotificationComponent } from './commonutility/notification/notification.component';
import { HomeComponent } from './commonutility/home/home.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './authentication/admin/admin.component';
import { UserComponent } from './authentication/user/user.component';
import { UnauthorizedComponent } from './authentication/unauthorized/unauthorized.component';
import { EmployeeReportComponent } from './report/employee-report/employee-report.component';
import { LeaveReportComponent } from './report/leave-report/leave-report.component';
import { PayrollReportComponent } from './report/payroll-report/payroll-report.component';
import { FeedbackReportComponent } from './report/feedback-report/feedback-report.component';
import { FooterComponent } from './commonutility/footer/footer.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthService],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthService],
    data: { expectedRole: 'user' }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeelistComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent
  },
  {
    path: 'addemployee',
    component: EmployeeCreateComponent
  },
  {
    path: 'editemployee/:id',
    component: EmployeeeditComponent
  },
  {
    path: 'departments/create',
    component: CreateDepartmentComponent
  },
  {
    path: 'departments/view/:id',
    component: ViewDepartmentComponent
  },
  {
    path: 'departments/list',
    component: ListDepartmentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'attendance',
    component: AttendancelistComponent
  },
  {
    path: 'createattendance',
    component: AttendancecreateComponent
  },
  {
    path: 'editattendance/:id',
    component: AttendanceeditComponent
  },
  {
    path: 'viewattendance',
    component: AttendanceviewComponent
  },
  {
    path: 'leaves',
    component: LeavelistComponent
  },
  {
    path: 'createleave',
    component: LeavecreateComponent
  },
  {
    path: 'editleave/:id',
    component: LeaveeditComponent
  },
  {
    path: 'performancedetail',
    component: PerformancedetailComponent
  },
  {
    path: 'performancelist',
    component: PerformancelistComponent
  },
  {
    path: 'createperformance',
    component: PerformancecreateComponent
  },
  {
    path: 'editperformance/:id',
    component: PerformanceeditComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'payroll',
    component: PayrolllistComponent
  },
  {
    path: 'payrolldetail',
    component: PayrolldetailComponent
  },
  {
    path: 'createpayroll',
    component: PayrollcreateComponent
  },
  {
    path: 'editpayroll/:id',
    component: PayrolleditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
  {
    path: 'employeereport',
    component: EmployeeReportComponent
  },
  {
    path: 'leavereport',
    component: LeaveReportComponent
  },
  {
    path: 'payrollreport',
    component: PayrollReportComponent
  },
  {
    path: 'feedbackreport',
    component: FeedbackReportComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
