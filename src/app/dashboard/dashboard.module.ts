import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CustomMaterialModule} from '../core/material.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import { TimelineSidebarComponent } from './containers/dashboard/components/timeline-sidebar/timeline-sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TimelineSidebarComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('dashboardFeature', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class DashboardModule { }
