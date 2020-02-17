import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { CustomMaterialModule } from './core/material.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoriesModule } from './categories/categories.module';
import {AuthenticatedLayoutComponent} from './shared/layouts/authenticated-layout/authenticated-layout.component';
import {AuthenticationLayoutComponent} from './shared/layouts/authentication-layout/authentication-layout.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    /*AuthenticatedLayoutComponent,
    AuthenticationLayoutComponent,
    HeaderComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AuthenticationModule,
    ExpensesModule,
    CategoriesModule,
    CoreModule,
    SharedModule,
    ChartsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
