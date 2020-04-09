import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../core/material.module';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

import { HeaderComponent } from './components/header/header.component';
import {
  TotalExpensesByCategoryPieChartComponent
} from './components/charts/total-expenses-by-category-pie-chart/total-expenses-by-category-pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import {
  CategoriesByConsumptionBarChartComponent
} from './components/charts/categories-by-consumption-bar-chart/categories-by-consumption-bar-chart.component';
import {
  OverallExpenseReportBarChartComponent
} from './components/charts/overall-expense-report-bar-chart/overall-expense-report-bar-chart.component';
import {
  MonthlyExpenseReportBarChartComponent
} from './components/charts/monthly-expense-report-bar-chart/monthly-expense-report-bar-chart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthenticationLayoutComponent,
    AuthenticatedLayoutComponent,
    TotalExpensesByCategoryPieChartComponent,
    CategoriesByConsumptionBarChartComponent,
    OverallExpenseReportBarChartComponent,
    MonthlyExpenseReportBarChartComponent,
    NotFoundComponent
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
    TotalExpensesByCategoryPieChartComponent,
    CategoriesByConsumptionBarChartComponent,
    OverallExpenseReportBarChartComponent,
    MonthlyExpenseReportBarChartComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
