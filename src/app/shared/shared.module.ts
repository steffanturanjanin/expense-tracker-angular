import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomMaterialModule } from '../core/material.module';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import {RouterModule} from '@angular/router';
import {PieChartComponent} from './components/charts/pie-chart/pie-chart.component';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import {
  OverallExpenseReportBarChartComponent
} from './components/charts/overall-expense-report-bar-chart/overall-expense-report-bar-chart.component';
import { MonthlyExpenseReportBarChartComponent } from './components/charts/monthly-expense-report-bar-chart/monthly-expense-report-bar-chart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthenticationLayoutComponent,
    AuthenticatedLayoutComponent,
    PieChartComponent,
    BarChartComponent,
    OverallExpenseReportBarChartComponent,
    MonthlyExpenseReportBarChartComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    ChartsModule
  ],
  exports: [
    HeaderComponent,
    AuthenticatedLayoutComponent,
    AuthenticationLayoutComponent,
    PieChartComponent,
    BarChartComponent,
    OverallExpenseReportBarChartComponent,
    MonthlyExpenseReportBarChartComponent
  ]
})
export class SharedModule { }
