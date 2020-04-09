import { ExpensesComponent } from './containers/expenses/expenses.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../core/guards/auth-guard.service';
import { AuthenticatedLayoutComponent } from '../shared/layouts/authenticated-layout/authenticated-layout.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';

const expensesRoutes: Routes = [
  { path: 'expenses', component: AuthenticatedLayoutComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', component: ExpensesComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(expensesRoutes)],
  exports: [RouterModule]
})

export class ExpensesRoutingModule { }
