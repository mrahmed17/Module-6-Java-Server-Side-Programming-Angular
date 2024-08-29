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
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BreadcrumbComponent } from './template/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CreatelocationComponent,
    EditlocationComponent,
    ListlocationComponent,
    ViewlocationComponent,
    BreadcrumbComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // your routes
    ]),
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
