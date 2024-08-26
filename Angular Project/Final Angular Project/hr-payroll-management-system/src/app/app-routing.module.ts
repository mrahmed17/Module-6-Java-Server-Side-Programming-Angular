import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './template/home/home.component';
import { LocationComponent } from './components/location/viewlocation/location.component';
import { CreatelocationComponent } from './components/location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './components/location/updatelocation/updatelocation.component';
import { RegistrationComponent } from './admin/createprofile/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { UnauthorizedComponent } from './authentication/unauthorized/unauthorized.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { ListemployeeComponent } from './components/employee/listemployee/listemployee.component';
import { ViewemployeeComponent } from './components/employee/viewemployee/viewemployee.component';
import { CreateemployeeComponent } from './components/employee/createemployee/createemployee.component';
import { EditemployeeComponent } from './components/employee/editemployee/editemployee.component';
import { CreatedepartmentComponent } from './components/department/createdepartment/createdepartment.component';
import { ViewdepartmentComponent } from './components/department/viewdepartment/viewdepartment.component';
import { ListdepartmentComponent } from './components/department/listdepartment/listdepartment.component';
import { ForgetpasswordComponent } from './authentication/forgetpassword/forgetpassword.component';
import { ListattendanceComponent } from './components/attendance/listattendance/listattendance.component';
import { CreateAttendanceComponent } from './components/attendance/createattendance/createattendance.component';
import { EditattendanceComponent } from './components/attendance/editattendance/editattendance.component';
import { ViewattendanceComponent } from './components/attendance/viewattendance/viewattendance.component';
import { ListleaveComponent } from './components/leave/listleave/listleave.component';
import { CreateleaveComponent } from './components/leave/createleave/createleave.component';
import { EditleaveComponent } from './components/leave/editleave/editleave.component';
import { ViewperformanceComponent } from './components/performance/viewperformance/viewperformance.component';
import { ListperformanceComponent } from './components/performance/listperformance/listperformance.component';
import { CreateperformanceComponent } from './components/performance/createperformance/createperformance.component';
import { EditperformanceComponent } from './components/performance/editperformance/editperformance.component';
import { ListpayrollComponent } from './components/payroll/listpayroll/listpayroll.component';
import { ViewpayrollComponent } from './components/payroll/viewpayroll/viewpayroll.component';
import { CreatePayrollComponent } from './components/payroll/createpayroll/createpayroll.component';
import { EditpayrollComponent } from './components/payroll/editpayroll/editpayroll.component';
import { NotfoundComponent } from './errorhandling/notfound/notfound.component';
import { AuthGuard } from './authentication/guard/authguard.guard';
import { RoleGuard } from './authentication/guard/role.guard';
import { CreatefeedbackComponent } from './components/feedback/createfeedback/createfeedback.component';
import { EditfeedbackComponent } from './components/feedback/editfeedback/editfeedback.component';
import { ViewfeedbackComponent } from './components/feedback/viewfeedback/viewfeedback.component';
import { ListfeedbackComponent } from './components/feedback/listfeedback/listfeedback.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['Admin', 'User'] },
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  { path: 'forgetpassword', component: ForgetpasswordComponent }, // Add this path for the Forget Password functionality

  {
    path: 'employees',
    children: [
      {
        path: 'create',
        component: CreateemployeeComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewemployeeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: EditemployeeComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'list',
        component: ListemployeeComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'locations',
    children: [
      {
        path: 'create',
        component: CreatelocationComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit/:id',
        component: UpdatelocationComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: LocationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'attendance',
    children: [
      {
        path: 'create',
        component: CreateAttendanceComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit/:id',
        component: EditattendanceComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewattendanceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'list',
        component: ListattendanceComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'leave',
    children: [
      {
        path: 'create',
        component: CreateleaveComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit/:id',
        component: EditleaveComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      { path: 'list', component: ListleaveComponent, canActivate: [AuthGuard] },
    ],
  },
  {
    path: 'performance',
    children: [
      {
        path: 'create',
        component: CreateperformanceComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit/:id',
        component: EditperformanceComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewperformanceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'list',
        component: ListperformanceComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'payroll',
    children: [
      {
        path: 'create',
        component: CreatePayrollComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'edit/:id',
        component: EditpayrollComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewpayrollComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'list',
        component: ListpayrollComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'departments',
    children: [
      {
        path: 'create',
        component: CreatedepartmentComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewdepartmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'list',
        component: ListdepartmentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  // {
  //   path: 'reports',
  //   children: [
  //     { path: 'employee', component: EmployeereportComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  //     { path: 'leave', component: LeavereportComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  //     { path: 'payroll', component: PayrollreportComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  //   ]
  // },
  {
    path: 'feedbacks',
    children: [
      { path: 'create', component: CreatefeedbackComponent },
      {
        path: 'edit/:id',
        component: EditfeedbackComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'view/:id',
        component: ViewfeedbackComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'list',
        component: ListfeedbackComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'Admin' },
      },
    ],
  },

  { path: '**', component: NotfoundComponent },

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'location', component: LocationComponent, canActivate: [AuthGuard] },
  // { path: 'createlocation', component: CreatelocationComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  // { path: 'updatelocation/:id', component: UpdatelocationComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  // { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' } },
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard, RoleGuard], data: { role: ['Admin', 'User'] } },
  // { path: 'unauthorized', component: UnauthorizedComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'employees', component: ListemployeeComponent },
  // { path: 'employee/:id', component: ViewemployeeComponent },
  // { path: 'createemployee', component: CreateemployeeComponent },
  // { path: 'editemployee/:id', component: EditemployeeComponent },
  // { path: 'departments/create', component: CreatedepartmentComponent },
  // { path: 'departments/view/:id', component: ViewdepartmentComponent },
  // { path: 'departments/list', component: ListdepartmentComponent },
  // { path: 'forgetpassword', component: ForgetpasswordComponent },
  // { path: 'attendance', component: ListattendanceComponent },
  // { path: 'createattendance', component: CreateAttendanceComponent },
  // { path: 'editattendance/:id', component: EditattendanceComponent },
  // { path: 'viewattendance', component: ViewattendanceComponent },
  // { path: 'leaves', component: ListleaveComponent },
  // { path: 'createleave', component: CreateleaveComponent },
  // { path: 'editleave/:id', component: EditleaveComponent },
  // { path: 'performancedetail', component: ViewperformanceComponent },
  // { path: 'performancelist', component: ListperformanceComponent },
  // { path: 'createperformance', component: CreateperformanceComponent },
  // { path: 'editperformance/:id', component: EditperformanceComponent },
  // { path: 'notification', component: NotificationComponent },
  // { path: 'payroll', component: ListpayrollComponent },
  // { path: 'payrolldetail', component: ViewpayrollComponent },
  // { path: 'createpayroll', component: CreatePayrollComponent },
  // { path: 'editpayroll/:id', component: EditpayrollComponent },
  // { path: 'employeereport', component: EmployeereportComponent },
  // { path: 'leavereport', component: LeavereportComponent },
  // { path: 'payrollreport', component: PayrollreportComponent },
  // { path: 'feedbackreport', component: FeedbackreportComponent },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'footer', component: FooterComponent },
  // { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
