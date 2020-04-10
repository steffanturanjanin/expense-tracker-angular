import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../core/material.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TimelineSidebarComponent } from './containers/dashboard/components/timeline-sidebar/timeline-sidebar.component';
import { TopExpensesComponent } from './containers/dashboard/components/top-expenses/top-expenses.component';

import { reducers } from './store/reducers';
import { effects } from './store/effects';



@NgModule({
  declarations: [
    DashboardComponent,
    TimelineSidebarComponent,
    TopExpensesComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('dashboardFeature', reducers),
    EffectsModule.forFeature(effects)
  ],
})
export class DashboardModule { }
