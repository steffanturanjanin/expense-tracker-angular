import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoggedInGuardService } from './guards/logged-in-guard.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CategoriesService} from './categories.service';

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
