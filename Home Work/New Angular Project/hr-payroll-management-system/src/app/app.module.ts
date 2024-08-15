import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { CreateEditEmployeeComponent } from './components/employee/create-edit-employee/create-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    ViewEmployeeComponent,
    CreateEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
