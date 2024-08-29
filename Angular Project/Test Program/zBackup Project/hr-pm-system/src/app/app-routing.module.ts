import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatelocationComponent } from './components/location/createlocation/createlocation.component';
import { EditlocationComponent } from './components/location/editlocation/editlocation.component';
import { ViewlocationComponent } from './components/location/viewlocation/viewlocation.component';
import { ListlocationComponent } from './components/location/listlocation/listlocation.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'locations',
    children: [
      { path: 'create', component: CreatelocationComponent },
      { path: 'edit/:id', component: EditlocationComponent },
      { path: 'view/:id', component: ViewlocationComponent },
      { path: 'list', component: ListlocationComponent },
    ],
  },
  { path: '**', redirectTo: 'sidebar' }, // Wildcard route for handling undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
