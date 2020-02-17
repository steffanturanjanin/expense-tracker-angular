import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { LogInComponent } from './containers/log-in/log-in.component';
import { CustomMaterialModule } from '../core/material.module';

import { reducers } from './store/reducers';
import { effects } from './store/effects';

import { AuthenticationLayoutComponent } from '../shared/layouts/authentication-layout/authentication-layout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    // AuthenticationLayoutComponent,
    SignUpComponent,
    LogInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    StoreModule.forFeature('authenticationFeature', reducers),
    EffectsModule.forFeature(effects),
    CustomMaterialModule,
    SharedModule
  ],
  exports: [
    SignUpComponent,
    LogInComponent
  ],
  providers: []
})
export class AuthenticationModule { }
