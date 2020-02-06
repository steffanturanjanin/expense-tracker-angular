import { ExpensesComponent } from './containers/expenses/expenses.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../core/guards/auth-guard.service';

const expensesRoutes: Routes = [
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(expensesRoutes)],
  exports: [RouterModule]
})

export class ExpensesRoutingModule { }
