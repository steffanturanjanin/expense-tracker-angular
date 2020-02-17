import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './containers/expenses/expenses.component';

import { CustomMaterialModule } from '../core/material.module';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AddExpenseFormComponent } from './containers/expenses/components/add-expense-form/add-expense-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import { ExpensesTableComponent } from './containers/expenses/components/expenses-table/expenses-table.component';
import { PieChartComponent } from '../shared/components/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    ExpensesComponent,
    AddExpenseFormComponent,
    ExpensesTableComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    ExpensesRoutingModule,
    StoreModule.forFeature('expensesFeature', reducers),
    EffectsModule.forFeature(effects)
  ],
  entryComponents: [
    AddExpenseFormComponent
  ]
})
export class ExpensesModule { }
