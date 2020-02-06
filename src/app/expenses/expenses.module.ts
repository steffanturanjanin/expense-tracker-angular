import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './containers/expenses/expenses.component';

import { CustomMaterialModule } from '../core/material.module';

import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [
    ExpensesComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
