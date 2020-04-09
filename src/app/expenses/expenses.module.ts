import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';
import { ExpensesRoutingModule } from './expenses-routing.module';

import { ExpensesComponent } from './containers/expenses/expenses.component';
import { AddExpenseFormComponent } from './containers/expenses/components/add-expense-form/add-expense-form.component';
import { ExpensesTableComponent } from './containers/expenses/components/expenses-table/expenses-table.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {effects} from './store/effects';
import {reducers} from './store/reducers';


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
