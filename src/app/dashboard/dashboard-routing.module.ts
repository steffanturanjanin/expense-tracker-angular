import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedLayoutComponent} from '../shared/layouts/authenticated-layout/authenticated-layout.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {NgModule} from '@angular/core';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: AuthenticatedLayoutComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '', component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
