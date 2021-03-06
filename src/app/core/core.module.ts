import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuardService } from './guards/auth-guard.service';
import { LoggedInGuardService } from './guards/logged-in-guard.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { AuthService } from './services/auth/auth.service';
import { CategoriesService } from './services/categories/categories.service';
import { ExpensesService } from './services/expenses/expenses.service';
import { ReportsService } from './services/reports/reports.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    LoggedInGuardService,
    CategoriesService,
    ExpensesService,
    ReportsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: []
})
export class CoreModule { }
