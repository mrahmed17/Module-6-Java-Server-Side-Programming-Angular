import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/viewlocation/location.component';
import { CreatelocationComponent } from './location/createlocation/createlocation.component';
import { UpdatelocationComponent } from './location/updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RegistrationComponent } from './registration/createprofile/registration.component';
import { LoginComponent } from './registration/login/login.component';
import { AuthGuard } from './registration/guard/authguard.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { LogoutComponent } from './registration/logout/logout.component';
import { UserprofileComponent } from './registration/userprofile/userprofile.component';
import { RoleGuard } from './registration/guard/role.guard';




const routes: Routes = [
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'location', component: LocationComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'User' }
  },
  {
    path: 'createlocation', component: CreatelocationComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },
  {
    path: 'updatelocation/:id', component: UpdatelocationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'student', component: ViewstudentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'createstudent', component: CreatestudentComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },
  {
    path: 'updatestudent/:id', component: UpdatestudentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' }
  },
  {
    path: 'reg', component: RegistrationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['Admin', 'User'] }
  },
  // {
  //   path: '**', redirectTo: 'login',
  //   pathMatch: 'full'
  // },



  // { path: 'createlocation', component: CreatelocationComponent, canActivate: [AuthGuard] },
  // { path: 'updatelocation/:id', component: UpdatelocationComponent, canActivate: [AuthGuard] },
  // { path: 'student', component: ViewstudentComponent, canActivate: [AuthGuard] },
  // { path: 'createstudent', component: CreatestudentComponent, canActivate: [AuthGuard] },
  // { path: 'updatestudent/:id', component: UpdatestudentComponent, canActivate: [AuthGuard] },
  // { path: 'reg', component: RegistrationComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }