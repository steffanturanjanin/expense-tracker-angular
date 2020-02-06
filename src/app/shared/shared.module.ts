import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomMaterialModule } from '../core/material.module';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';


@NgModule({
  declarations: [HeaderComponent, AuthenticationLayoutComponent, AuthenticatedLayoutComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    HeaderComponent,
    AuthenticatedLayoutComponent,
    AuthenticationLayoutComponent
  ]
})
export class SharedModule { }
