import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { CreatelocationComponent } from './components/location/createlocation/createlocation.component';
import { EditlocationComponent } from './components/location/editlocation/editlocation.component';
import { ListlocationComponent } from './components/location/listlocation/listlocation.component';
import { ViewlocationComponent } from './components/location/viewlocation/viewlocation.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, DashboardComponent, CreatelocationComponent, EditlocationComponent, ListlocationComponent, ViewlocationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
