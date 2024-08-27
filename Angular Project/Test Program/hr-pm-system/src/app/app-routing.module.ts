import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './template/sidebar/sidebar.component';

const routes: Routes = [{ path: 'sidebar', component: SidebarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
