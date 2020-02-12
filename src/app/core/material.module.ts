import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatError,
  MatSidenavModule, MatListModule, MatGridListModule, MatSortModule, MatOptionModule,
  MatSelectModule, MatProgressBarModule, MatDividerModule, MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSortModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDividerModule,
    MatOptionModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatError,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSortModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDividerModule,
    MatOptionModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]
})
export class CustomMaterialModule { }
